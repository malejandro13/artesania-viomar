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
  }
  
`;

export const TextBox = styled.div`
  position: relative;
  max-width: 100%;

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    max-width: 600px;
  }
`;

export const Anchor = styled.a`
  display: inline-block;
  padding: 8px 20px;
  background-color: #fff;
  color: #333;
  border-radius: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
`;

export const ImageBox = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    width: 600px;
    justify-content: flex-end;
  }
`;

export const Image = styled.img`
  max-width: 300px;

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    max-width: 400px;
  }
`;
