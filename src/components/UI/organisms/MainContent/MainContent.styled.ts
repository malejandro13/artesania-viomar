import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    margin-top: 0;
    flex-direction: row;
    padding: 0;
  }
`;

export const TextBox = styled.div`
  position: relative;
  width: 100%;
`;

export const Anchor = styled.a`
  position: absolute;
  left: -7rem;
  padding: 1rem 0rem;
  color: ${({ theme: { colors }}) => colors.white};
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  border-end-end-radius: 60px;
  border-start-end-radius: 60px;
  width: 18rem;
  background: linear-gradient(to right,#bb9a83,#7f695c);
  box-shadow: 0 4px 30px rgba(0, 0, 0, .1);
  text-align: end;

  &::after {
    content: '>';
    font-size: 1.5rem;
    padding: .6rem 1.2rem;
    background: #b99881;
    border-radius: 50%;
    margin: 0 .5rem;
    background: linear-gradient(to right,#d39f79,#9e7151);
  }

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    padding: 1.5rem .3rem;
    
    &::after {
      margin: 0 1rem;
    }
  }
`;

export const ImageBox = styled.div`
  position: relative;
  display: block;
  max-width: 100%;
  width: 400px;
  margin: 6rem 0 3rem 0;
  padding: 1rem;
  z-index: 1;
  
  @media (min-width: ${({theme: { breakpoints: { medium: { value, unit }}}}) => `${value}${unit}`}) {
    margin: 2rem 0 2rem 0;
  }

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    width: 600px;
    margin-top: 1.25rem;
    padding: 3rem;
  }
`;

export const Description = styled.div`
  margin: 2rem 0 3rem 0;
`;
