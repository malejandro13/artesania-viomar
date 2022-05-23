import styled from "styled-components";

export const List = styled.ul`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background-color: rgba(0, 0, 0, .2);
  width: 100%;
  height: 50px;
  z-index: 1;

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: initial;
    right: 5px;
    justify-content: center;
    flex-direction: column;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 50px;
  }
`;

export const Item = styled.li`
  list-style: none;
  display: inline-block;
  margin: 5px 0;
  transform: scale(.6);
`;
