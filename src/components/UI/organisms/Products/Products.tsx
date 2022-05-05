import { ProductCard } from '@components/UI/molecules/ProductCard';
import { Item, List } from './Products.styled';
import { ProductDataResponse, ProductResponse } from 'graphql/interfaces/product';
import { ProductsProps } from './Products.interfaces';

export const Products = ({
  products,
}: ProductsProps) => (
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
        }: ProductDataResponse,
        index: number,
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
