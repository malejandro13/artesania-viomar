import styled from 'styled-components';
import { ListProps } from './MenuNavigation.interfaces';

export const List = styled.ul<ListProps>`
  display: none;

  ${({ isMenuOpen }) => isMenuOpen && `
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

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    position: relative;
    display: flex;
    flex-direction: row;
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
  color: #fff;
  font-weight: 400;

  &.active,
  &:hover {
    background-color: #fff;
    color: #333;
  }

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    margin-left: 10px;
    font-size: 1em;
  }
`;