import styled from 'styled-components';
import { SectionProps } from './index.interfaces';

export const Section =styled.section<SectionProps>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  padding: 20px;
  padding-bottom: 120px;
  background-color: ${({ backgroundColor }) => backgroundColor};

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    padding: 70px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 80%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`