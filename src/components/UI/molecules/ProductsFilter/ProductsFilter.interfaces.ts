import { ProductTypeDataResponse } from 'graphql/interfaces/productType.interfaces';

export interface ProductsFilterProps {
  filters: ProductTypeDataResponse[];
  onFiltered: Function,
  initialSelectedFilters: object
};
