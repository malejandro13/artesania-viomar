import { ChangeEvent, useMemo, useState } from 'react';
import { Checkbox } from '@components/UI/atoms/Checkbox';
import { ButtonCloseDialog, ButtonOpenFilter, Fieldset, FilterTitle, FilterWrapper } from './ProductsFilter.styled';
import { ProductsFilterProps } from './ProductsFilter.interfaces';
import { ProductTypeDataResponse } from 'graphql/interfaces/productType';
import { theme } from 'styles/theme';
import { Dialog } from '@components/UI/atoms/Dialog';
import { Filters } from '@components/icons/Filters';
import { Typography } from '@components/UI/atoms/Typography';
import { useWindowSize } from 'hooks/useWindowSize';
import { Size } from 'hooks/useWindowSize/useWindowSize.interfaces';

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

  const filterList = useMemo(() => (
    <Fieldset aria-label="Filtrar productos">
      {filters.map(({name, slug}: ProductTypeDataResponse) => (
        <Checkbox
          key={slug}
          id={slug}
          name={slug}
          initiallyChecked={selectedFilters[slug as keyof object]}
          label={name}
          onChange={handleOnChange}
        />
      ))}    
    </Fieldset>
  ), [filters, selectedFilters]);

  const filterTitle = (
    <FilterTitle aria-hidden>
      <Filters width="24" height="24" />
      &nbsp;
      <Typography variant="h2">Filtrar</Typography>
    </FilterTitle>
  );

  return (
    <>
    {isMobileScreen ? (
      <>
      <ButtonOpenFilter
        aria-label="Filtrar productos. Al hacer click en este botón, se abrirá una ventana de dialogo donde podrás filtras los productos"
        onClick={handleClickOpenDialog}
      >
        <Filters width="24" height="24" />
        &nbsp;
        Filtrar
      </ButtonOpenFilter>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <>
          {filterTitle}
          {filterList}
          <ButtonCloseDialog
            aria-label="Aplicar filtros. Al hacer click en este botón, se cerrará la ventana de dialogo y podrás ver los productos filtrados"
            onClick={handleCloseDialog}
          >
            Aplicar
          </ButtonCloseDialog>
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
