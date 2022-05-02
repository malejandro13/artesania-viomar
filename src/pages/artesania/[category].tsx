import { useEffect, useMemo, useState } from 'react';
import { Header } from '@components/UI/organisms/Header';
import { SocialMedia } from '@components/UI/molecules/SocialMedia';
import { SOCIAL_MEDIA_LIST } from '@constants/socialMedia';
import { ProductContent, ProductsFilterWrapper, ProductsWrapper, Section } from '../pages.styled';
import { Products } from '@components/UI/organisms/Products';
import { ProductsFilter } from '@components/UI/molecules/ProductsFilter';
import { ClientOnly } from 'graphql/components/ClientOnly';
import client from '../../../apollo-client';
import { getProductTypesByCategory } from 'graphql/queries/productType';
import { LeatherPageProps } from '../pages.interfaces';
import { ProductTypeDataResponse } from 'graphql/interfaces/productType';
import { getCategories } from 'graphql/queries/category';
import { CategoryDataResponse } from 'graphql/interfaces/category';

const getProductFilter = (filters: object, category: string) => {
  const productTypeFilter : object[] = [];
  Object.entries(filters).forEach(([productType, checked]) => {
    checked && productTypeFilter.push({ productType: productType });
  });
  return {
  	AND: [
      {
        OR: productTypeFilter
    	},
      {category}
    ]
	}
};

const Leather = ({ productTypes, category }: LeatherPageProps) => {
  const initialSelectedFilters = useMemo(() => {
    const initialSelectedFilters = {};
    productTypes.forEach(({ slug, initiallySelected }: ProductTypeDataResponse) => {
      initialSelectedFilters[slug as keyof object] = initiallySelected as never;
    });

    return initialSelectedFilters;
  }, [productTypes, category]);

  const [productFilter, setProductFilter] = useState(getProductFilter(initialSelectedFilters, category));

  const handleOnFiltered = (filtered: object) => {
    setProductFilter(getProductFilter(filtered, category))
  };

  useEffect(() => {
    setProductFilter(getProductFilter(initialSelectedFilters, category))
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
          <ClientOnly>
            <Products productFilter={productFilter} />
          </ClientOnly>
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

  return { paths, fallback: false };
};

export async function getStaticProps({ params: { category } }: { params: { category: string } }) {
  const { data } = await client.query({
    query: getProductTypesByCategory,
    variables: {
      productTypeFilter: {category},
      productTypeOrder: 'slug_ASC',
    },
  });

  return {
    props: {
      productTypes: data.productTypeCollection.items,
      category,
    },
  };
};

export default Leather;
