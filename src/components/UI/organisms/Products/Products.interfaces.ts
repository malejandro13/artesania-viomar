import { ProductDataResponse } from 'graphql/interfaces/product';

interface ProductFilter {
  productType?: string;
  AND?: ProductFilter[];
  OR?: ProductFilter[];
};

export interface ProductsProps {
  products: ProductDataResponse[];
  category: string;
}
