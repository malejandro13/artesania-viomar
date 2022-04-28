import { ProductCard } from '@components/UI/molecules/ProductCard';
import { ProductsProps } from './Products.interfaces';
import { Item, List } from './Products.styled';

export const Products = ({
  products,
}: ProductsProps) => (
  <List>
    {
      products.map((product, index) => (
        <Item key={`product-${index}`}>
          <ProductCard {...product} />
        </Item>
      ))
    }
  </List>
);
