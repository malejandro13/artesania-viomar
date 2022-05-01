import styled from "styled-components";

export const List = styled.ul`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  right: 0;
  width: 50px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    background-color: initial;
    right: 5px;
  }
`;

export const Item = styled.li`
  list-style: none;
  display: inline-block;
  margin: 5px 0;
  transform: scale(0.6);
`;
