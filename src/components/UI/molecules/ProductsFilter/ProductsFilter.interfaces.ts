import { ProductTypeDataResponse } from 'graphql/interfaces/productType';

export interface ProductsFilterProps {
  filters: ProductTypeDataResponse[];
  onFiltered: Function,
  productFilter: object
};
