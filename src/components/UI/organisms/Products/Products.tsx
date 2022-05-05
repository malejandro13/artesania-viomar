import { useQuery } from '@apollo/client';
import { ProductCard } from '@components/UI/molecules/ProductCard';
import { Item, List } from './Products.styled';
import { getProductsByType } from 'graphql/queries/product';
import { ProductResponse } from 'graphql/interfaces/product';
import { ProductsProps } from './Products.interfaces';
import { ProductCardSkeleton } from '@components/UI/molecules/ProductCardSkeleton';

export const Products = ({
  productFilter,
}: ProductsProps) => {
  const { loading, error, data } = useQuery(getProductsByType, {
    variables: {
      productFilter,
      productOrder: 'productType_ASC',
    },
  });
  
  if (loading) {
    return (
      <List>
        {Array(6).fill(0).map((_, index) => (
          <Item key={`product-skeleton-${index}`}>
            <ProductCardSkeleton />
          </Item>
        ))}
      </List>
    );
  };

  if (error) {
    console.error(error);
    return null;
  };
  
  const { productCollection: { items: products } }: ProductResponse = data;

  return (
    <List>
      {
        products.map((
          {
            mainImage,
            imagesCollection,
            title,
            ctaText,
            ctaLink,
            ctaAriaLabel,
          },
          index,
        ) => (
          <Item key={`product-${index}`}>
            <ProductCard
              mainImage={mainImage}
              images={imagesCollection.items}
              title={title}
              ctaText={ctaText}
              ctaLink={ctaLink}
              ctaAriaLabel={ctaAriaLabel}
            />
          </Item>
        ))
      }
    </List>
  );
};
