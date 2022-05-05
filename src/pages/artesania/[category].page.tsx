import { useEffect, useMemo, useState } from 'react';
import { Header } from '@components/UI/organisms/Header';
import { SocialMedia } from '@components/UI/molecules/SocialMedia';
import { SOCIAL_MEDIA_LIST } from '@constants/socialMedia';
import { ProductContent, ProductsFilterWrapper, ProductsWrapper, Section } from '../pages.styled';
import { Products } from '@components/UI/organisms/Products';
import { ProductsFilter } from '@components/UI/molecules/ProductsFilter';
import client from '../../../apollo-client';
import { getProductTypes } from 'graphql/queries/productType';
import { LeatherPageProps } from '../pages.interfaces';
import { ProductTypeDataResponse } from 'graphql/interfaces/productType';
import { getCategories } from 'graphql/queries/category';
import { CategoryDataResponse } from 'graphql/interfaces/category';
import { getProducts } from 'graphql/queries/product';

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
    <Section alignItems="start">
      <Header/>
      <ProductContent>
        <ProductsFilterWrapper>
          <ProductsFilter
            filters={productTypes}
            initialSelectedFilters={initialSelectedFilters}
            onFiltered={handleOnFiltered} 
          />
        </ProductsFilterWrapper>
        <ProductsWrapper>
            <Products products={products} />
        </ProductsWrapper>
      </ProductContent>
      <SocialMedia socialMediaList={SOCIAL_MEDIA_LIST} />
    </Section>
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
