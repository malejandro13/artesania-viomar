import { ProductCard } from '@components/UI/molecules/ProductCard';
import { Item, List } from './Products.styled';
import { ProductDataResponse, ProductResponse } from 'graphql/interfaces/product';
import { ProductsProps } from './Products.interfaces';

export const Products = ({
  products,
  category,
}: ProductsProps) => (
  <List aria-label={`Artesanía en ${category}`}>
    {
      products.map((
        {
          mainImage,
          imagesCollection,
          title,
          ctaText,
          ctaLink,
          ctaAriaLabel,
          ariaLabel,
        }: ProductDataResponse,
        index: number,
      ) => (
        <Item key={`product-${index}`}>
          <ProductCard
            mainImage={mainImage}
            images={imagesCollection.items}
            title={title}
            ariaLabel={ariaLabel}
            ctaText={ctaText}
            ctaLink={ctaLink}
            ctaAriaLabel={ctaAriaLabel}
          />
        </Item>
      ))
    }
  </List>
);
