import styled from 'styled-components';

export const MenuWrapper = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  user-select: none;
  z-index: 2;

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    position: initial;
  }
`;
