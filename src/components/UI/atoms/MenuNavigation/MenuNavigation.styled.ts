import styled from 'styled-components';
import { ListProps } from './MenuNavigation.interfaces';

export const List = styled.ul<ListProps>`
  display: none;
  background: #bb9a83;
  background: linear-gradient(to right, #7f695c, #bb9a83);

  ${({ open }) => open && `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    position: relative;
    display: flex;
    flex-direction: row;
    background: initial;
  }
`;

export const Item = styled.li`
  list-style: none;
`;

export const Anchor = styled.a`
  display: inline-block;
  font-size: 1.2em;
  margin: 5px 0;
  padding: 8px 15px;
  border-radius: 40px;
  text-decoration: none;
  color: ${({ theme: { colors }}) => colors.white};
  font-weight: 400;

  &.active,
  &:hover {
    background-color: ${({ theme: { colors }}) => colors.white};
    color: #333;
  }

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    margin-left: 10px;
    font-size: 1em;
  }
`;