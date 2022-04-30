import { CheckboxProps } from '@components/UI/atoms/Checkbox/Checkbox.interfaces';

export interface ProductsFilterProps {
  filters: CheckboxProps[];
  onFiltered: Function,
  initialSelectedFilters: object
};
