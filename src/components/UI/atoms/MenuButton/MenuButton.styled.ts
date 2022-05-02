import styled from 'styled-components';
import { ButtonProps } from './MenuButton.interfaces';

export const Button = styled.button<ButtonProps>`
  border: none;
  background: none;
  cursor: pointer;

  span {
    position: relative;
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    background: ${({ theme: {colors} }) => colors.white};
    border-radius: 3px;
    z-index: 3;
    transform-origin: 4px 0px;
    transition: transform .5s cubic-bezier(.77,.2,.05,1.0), background .5s cubic-bezier(.77,.2,.05,1.0), opacity .55s ease;
  }

  ${({ open }) => open && `
    & span:first-child {
      opacity: 1;
      transform: rotate(45deg) translate(1px, -1px);
    }

    & span:nth-child(2)
    {
      opacity: 0;
      transform: rotate(0deg) scale(.2, .2);
    }

    & span:last-child
    {
      transform: rotate(-45deg) translate(-1px, -1px);
    }
  `}

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    display: none;
  }
`
