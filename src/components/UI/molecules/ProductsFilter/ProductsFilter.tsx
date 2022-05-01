import { ChangeEvent, useEffect, useState } from 'react';
import { Checkbox } from '@components/UI/atoms/Checkbox';
import { FilterWrapper } from './ProductsFilter.styled';
import { ProductsFilterProps } from './ProductsFilter.interfaces';
import { ProductTypeDataResponse } from 'graphql/interfaces/productType.interfaces';

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
        filters.map(({name, slug, initiallySelected}: ProductTypeDataResponse) => (
          <Checkbox
            id={slug}
            key={slug}
            name={slug}
            initiallyChecked={initiallySelected}
            label={name}
            onChange={handleOnChange}
          />
        ))
      }
    </FilterWrapper>
  );
};
