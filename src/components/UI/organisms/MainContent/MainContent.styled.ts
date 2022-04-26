import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  width: 100%;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    margin-top: 0;
    flex-direction: row;
    padding: 0;
  }
`;

export const TextBox = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    max-width: 630px; 
  }
`;

export const Anchor = styled.a`
  position: absolute;
  left: -7rem;
  padding: 1rem 0rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  border-end-end-radius: 60px;
  border-start-end-radius: 60px;
  width: 18rem;
  background: linear-gradient(to right,#bb9a83,#7f695c);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  text-align: end;

  &::after {
    content: '>';
    font-size: 1.5rem;
    padding: 0.6rem 1.2rem;
    background: #b99881;
    border-radius: 50%;
    margin: 0 0.5rem;
    background: linear-gradient(to right,#d39f79,#9e7151);
  }

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    padding: 1.5rem 0.3rem;
    
    &::after {
      margin: 0 1rem;
    }
  }
`;

export const ImageBox = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
  margin: 7rem 0 2rem 0;

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    width: 600px;
    justify-content: flex-end;
    margin-top: 1.25rem;  
  }
`;

export const Image = styled.img`
  max-width: 250px;

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    max-width: 400px;
  }
`;
