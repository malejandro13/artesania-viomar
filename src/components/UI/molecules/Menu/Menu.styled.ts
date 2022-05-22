import styled from 'styled-components';

export const MenuWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  user-select: none;
  z-index: 3;

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    position: initial;
  }
`;
