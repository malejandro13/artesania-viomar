import styled from 'styled-components';
import { AlignItems, SectionProps } from './Layout.interfaces';

export const Section =styled.div<SectionProps>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems || AlignItems.center};
  overflow-x: hidden;
  padding: 20px;
  padding-bottom: 190px;
  padding-top: 100px;
  background: #bb9a83;
  background: linear-gradient(to right, #7f695c, #bb9a83);
  overflow: hidden;
  &::before {
    content: '';
    position: fixed;
    bottom: -200px;
    width: 100px;
    border-radius: 50%;
    border: 16rem solid rgba(0,0,0,.05);
    
  }

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
