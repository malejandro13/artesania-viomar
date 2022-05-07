import styled from 'styled-components';

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    flex-direction: row;
    margin-top: 1rem;
  }
`;

export const ProductsFilterWrapper = styled.div`
  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    min-width: 270px;
  }
`;

export const ProductsWrapper = styled.div`
  width: 100%;
`;
