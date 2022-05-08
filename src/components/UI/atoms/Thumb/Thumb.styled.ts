import styled from 'styled-components';

export const List = styled.ul`
  position: absolute;
  left: 50%;
  bottom: 20px;;
  transform: translateX(-50%);
  display: flex;
`;

export const Item = styled.li`
  list-style: none;
  display: inline-block;
  transition: .5s;
  background-color: rgba(255, 255, 255, .25);
  padding: 5px;
  border: 2px solid rgba(255, 255, 255, .25);
  border-radius: 10px;
  margin: 0 3px;

  &::before {
    content: attr(data-text) / "";
    position: absolute;
    top: -120px;
    right: 0;
    left: -40px;
    font-size: 5em;
    white-space: nowrap;
    color: rgba(0, 0, 0, .3);
    opacity: 0;
    font-weight: 700;
    pointer-events: none;
  }

  &.active::before {
    opacity: 1;
  }

  &.active {
    border: 2px solid rgba(255, 255, 255, 1);;
  }

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    margin: 0 10px;

    &::before {
      top: -200px;
      left: -100px;
      font-size: 8em;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  max-width: 50px;

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    max-width: 80px;
  }
`;
