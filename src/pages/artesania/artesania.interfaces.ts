import { ProductDataResponse } from 'graphql/interfaces/product';
import { ProductTypeDataResponse } from 'graphql/interfaces/productType';

export interface LeatherPageProps {
  products: ProductDataResponse[]
  productTypes: ProductTypeDataResponse[];
  category: string;
};
