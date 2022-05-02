import styled from 'styled-components';
import { AlignItems, SectionProps } from './pages.interfaces';

export const Section =styled.section<SectionProps>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems || AlignItems.center};
  overflow-x: hidden;
  padding: 20px;
  padding-bottom: 120px;
  padding-top: 100px;
  background: #bb9a83;
  background: linear-gradient(to right, #7f695c, #bb9a83);
  overflow: hidden;

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    padding: 70px 50px;

    &::before {
      content: '';
      position: fixed;
      top: -10rem;
      right: -20rem;
      width: 700px;
      height: 700px;
      border-radius: 50%;
      border: 14rem solid rgba(0, 0, 0, .05);
      
    }
  }
`;

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
