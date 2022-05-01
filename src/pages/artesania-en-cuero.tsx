import { useMemo, useState } from 'react';
import { Header } from '@components/UI/organisms/Header';
import { SocialMedia } from '@components/UI/molecules/SocialMedia';
import { SOCIAL_MEDIA_LIST } from '@constants/socialMedia';
import { Section } from './pages.styled';
import { Products } from '@components/UI/organisms/Products';
import { ProductsFilter } from '@components/UI/molecules/ProductsFilter';
import { ClientOnly } from 'graphql/components/ClientOnly';
import client from '../../apollo-client';
import { getProductTypesByCategory } from 'graphql/queries/productType';
import { LeatherPageProps } from './pages.interfaces';
import { ProductTypeDataResponse } from 'graphql/interfaces/productType';
import { ThumbNames } from '@constants/thumb';

const getProductFilter = (filters: object) => {
  const productTypeFilter : object[] = [];
  Object.entries(filters).forEach(([productType, checked]) => {
    checked && productTypeFilter.push({ productType: productType });
  });
  return {
    OR: productTypeFilter,
  };
}

const Leather = ({ productTypes }: LeatherPageProps) => {
  const initialSelectedFilters = useMemo(() => {
    const initialSelectedFilters = {};
    productTypes.forEach(({ slug, initiallySelected }: ProductTypeDataResponse) => {
      initialSelectedFilters[slug as keyof object] = initiallySelected as never;
    });

    return initialSelectedFilters;
  }, [productTypes]);

  const [productFilter, setProductFilter] = useState(getProductFilter(initialSelectedFilters));

  const handleOnFiltered = (filtered: object) => {
    setProductFilter(getProductFilter(filtered))
  };

  return (
    <Section alignItems="start">
      <Header/>
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{width: '30%'}}>
        <ProductsFilter
          filters={productTypes}
          initialSelectedFilters={initialSelectedFilters}
          onFiltered={handleOnFiltered} 
        />
        </div>
        <div style={{width: '70%'}}>
          <ClientOnly>
            <Products productFilter={productFilter} />
          </ClientOnly>
        </div>
      </div>
      <SocialMedia socialMediaList={SOCIAL_MEDIA_LIST} />
    </Section>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: getProductTypesByCategory,
    variables: {
      productFilter: {category: ThumbNames.leather},
      productTypeOrder: 'slug_ASC',
    },
  });

  return {
    props: {
      productTypes: data.productTypeCollection.items,
    },
 };
}

export default Leather;
