import { NextSeo } from 'next-seo';
import { useEffect, useMemo, useState } from 'react';
import { ProductContent, ProductsFilterWrapper, ProductsWrapper } from './artesania.styled';
import { Products } from '@components/UI/organisms/Products';
import { ProductsFilter } from '@components/UI/molecules/ProductsFilter';
import client from '../../../apollo-client';
import { getProductTypes } from 'graphql/queries/productType';
import { LeatherPageProps } from './artesania.interfaces';
import { ProductTypeDataResponse } from 'graphql/interfaces/productType';
import { getCategories } from 'graphql/queries/category';
import { CategoryDataResponse } from 'graphql/interfaces/category';
import { getProducts } from 'graphql/queries/product';
import { Layout } from '@components/UI/organisms/Layout';
import nextSeoConfig from 'config/next-seo.config';

const Leather = ({ products: productsResponse, productTypes, category }: LeatherPageProps) => {
  const initialSelectedFilters = useMemo(() => {
    const initialSelectedFilters = {};
    productTypes.forEach(({ slug, initiallySelected }: ProductTypeDataResponse) => {
      initialSelectedFilters[slug as keyof object] = initiallySelected as never;
    });

    return initialSelectedFilters;
  }, [productTypes, category]);

  const [productFilter, setProductFilter] = useState(initialSelectedFilters);

  const products = useMemo(() =>
    productsResponse.filter((product) =>
      productFilter[product.productType as keyof object]
  ), [productFilter]);

  const handleOnFiltered = (filtered: object) => {
    setProductFilter(filtered)
  };

  useEffect(() => {
    setProductFilter(initialSelectedFilters)
  }, [productTypes, category]);

  return (
    <Layout>
      <NextSeo
        {...nextSeoConfig}
        title={`Artesanía en ${category} | Artesanía Viomar`}
      />
      <ProductContent>
        <ProductsFilterWrapper>
          <ProductsFilter
            filters={productTypes}
            productFilter={productFilter}
            onFiltered={handleOnFiltered} 
          />
        </ProductsFilterWrapper>
        <ProductsWrapper>
            <Products products={products} category={category} />
        </ProductsWrapper>
      </ProductContent>
    </Layout>
  );
};

export async function getStaticPaths() {
  const { data } = await client.query({
    query: getCategories,
  });

  const categories = data.categoryCollection.items;

  const paths = categories.map(({slug}: CategoryDataResponse) => ({
    params: { category: slug },
  }));

  return { paths, fallback: 'blocking' };
};

export async function getStaticProps({ params: { category } }: { params: { category: string } }) {
  const { data: productType } = await client.query({
    query: getProductTypes,
    variables: {
      productTypeFilter: {category},
      productTypeOrder: 'slug_ASC',
    },
  });
  
  const { data: product  } = await client.query({
    query: getProducts,
    variables: {
      productFilter: {category},
    },
  });

  return {
    props: {
      products: product.productCollection.items,
      productTypes: productType.productTypeCollection.items,
      category,
    },
  };
};

export default Leather;
