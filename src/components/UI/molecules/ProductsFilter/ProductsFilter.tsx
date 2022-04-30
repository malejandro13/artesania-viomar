import { ChangeEvent, useEffect, useState } from 'react';
import { Checkbox } from '@components/UI/atoms/Checkbox';
import { FilterWrapper } from './ProductsFilter.styled';
import { CheckboxProps } from '@components/UI/atoms/Checkbox/Checkbox.interfaces';
import { ProductsFilterProps } from './ProductsFilter.interfaces';

export const ProductsFilter = ({ filters, onFiltered, initialSelectedFilters }: ProductsFilterProps) => {
  const [selectedFilters, setSelectedFilters] = useState(initialSelectedFilters);

  const handleOnChange = ({target: { checked, name }}: ChangeEvent<HTMLInputElement>) => {
    const filtered = {
      ...selectedFilters,
      [name]: checked,
    };
    setSelectedFilters(filtered);
    onFiltered(filtered);
  };

  return (
    <FilterWrapper>
      {
        filters.map(({id, name, initiallyChecked, label}: CheckboxProps) => (
          <Checkbox
            id={id}
            key={id}
            name={name}
            initiallyChecked={initiallyChecked}
            label={label}
            onChange={handleOnChange}
          />
        ))
      }
    </FilterWrapper>
  );
};
