import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({theme: { breakpoints }}) => breakpoints.medium}) {
    padding: 20px 100px;
  }
`;

export const Logo = styled.a`
  position: relative;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  cursor: pointer;
`;
