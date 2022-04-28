import styled from "styled-components";

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
  transition: 0.5s;
  background-color: rgba(255, 255, 255, 0.25);
  padding: 5px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  margin: 0 3px;
  height: 50px;

  &::before {
    position: absolute;
    top: -120px;
    right: 0;
    left: -40px;
    font-size: 5em;
    content: attr(data-text);
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.3);
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

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    margin: 0 10px;
    height: 80px;

    &::before {
      top: -200px;
      left: -100px;
      font-size: 8em;
    }
  }
    
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Image = styled.img`
  max-width: 50px;

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    max-width: 80px;
  }
`;