import { ChangeEvent, useMemo, useState } from 'react';
import { Checkbox } from '@components/UI/atoms/Checkbox';
import { ButtonCloseDialog, ButtonOpenFilter, FilterTitle, FilterWrapper } from './ProductsFilter.styled';
import { ProductsFilterProps } from './ProductsFilter.interfaces';
import { ProductTypeDataResponse } from 'graphql/interfaces/productType';
import { useWindowSize, Size } from 'hooks/useWindowSize';
import { theme } from 'styles/theme';
import { Dialog } from '@components/UI/atoms/Dialog';
import { Filters } from '@components/icons/Filters';
import { Typography } from '@components/UI/atoms/Typography';

export const ProductsFilter = ({ filters, onFiltered, initialSelectedFilters }: ProductsFilterProps) => {
  const [selectedFilters, setSelectedFilters] = useState(initialSelectedFilters);
  const [openDialog, setOpenDialog] = useState(false);
  const { width }: Size = useWindowSize();

  const isMobileScreen = useMemo(
    () => width < theme.breakpoints.large.value,
    [width],
  );

  const handleOnChange = ({target: { checked, name }}: ChangeEvent<HTMLInputElement>) => {
    const filtered = {
      ...selectedFilters,
      [name]: checked,
    };
    setSelectedFilters(filtered);
    onFiltered(filtered);
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const filterList = useMemo(() => filters.map(({name, slug, initiallySelected}: ProductTypeDataResponse) => (
    <Checkbox
      id={slug}
      key={slug}
      name={slug}
      initiallyChecked={selectedFilters[slug as keyof object]}
      label={name}
      onChange={handleOnChange}
    />
  )), [filters, selectedFilters]);

  const filterTitle = (
    <FilterTitle>
      <Filters width="24" height="24" />
      &nbsp;
      <Typography variant="h2">Filtrar</Typography>
    </FilterTitle>
  );
    

  return (
    <>
    {isMobileScreen ? (
      <>
      <ButtonOpenFilter onClick={handleClickOpenDialog}>
        <Filters width="24" height="24" />
        &nbsp;
        Filtrar
      </ButtonOpenFilter>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <>
          {filterTitle}
          {filterList}
          <ButtonCloseDialog key="button-dialog" onClick={handleCloseDialog}>Aplicar</ButtonCloseDialog>
        </>
      </Dialog>
      </>
    ) : (
      <FilterWrapper>
        {filterTitle}
        {filterList}
      </FilterWrapper>
    )}
    </>
  );
};
