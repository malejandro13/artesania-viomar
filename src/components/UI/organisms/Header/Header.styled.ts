import styled from 'styled-components';
import { HeaderProps } from './Header.interfaces';

export const HeaderWrapper = styled.header<HeaderProps>`
  padding: 10px 20px;
  position: fixed;
  top: ${({ showHeader }) => showHeader ? '0' : '-100px'} ;
  left: 0;
  background: initial;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: top 0.3s;
  z-index: 2;

  ${({ showHeaderBackground }) => showHeaderBackground && `
    background: rgba(255, 255, 255, .2);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, .1);
  `}

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    padding: 20px 100px;
  }
`;

export const Logo = styled.a`
  position: relative;
  font-weight: 600;
  color: ${({ theme: { colors }}) => colors.white};
  text-decoration: none;
  font-size: 2em;
`;
