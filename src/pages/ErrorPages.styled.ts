import styled from "styled-components";

export const MessageErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export const MessageErrorIllustration = styled.div`
  position: relative;
  & > svg {
    width: 250px;
    height: 250px;
  }

  @media (min-width: ${({theme: { breakpoints: { medium: { value, unit }}}}) => `${value}${unit}`}) {
    & > svg {
      width: 500px;
      height: 500px;
    }
  }
`;

export const NumberErrorLeft = styled.span`
  position: absolute;
  top: 3px;
  left: 23px;
  font-size: 7rem;
  color: #263238;

  @media (min-width: ${({theme: { breakpoints: { medium: { value, unit }}}}) => `${value}${unit}`}) {
    top: 17px;
    left: 55px;
    font-size: 13rem;
  }
`;

export const NumberErrorRight = styled.span`
  position: absolute;
  top: 3px;
  right: 34px;
  font-size: 7rem;
  color: #263238;

  @media (min-width: ${({theme: { breakpoints: { medium: { value, unit }}}}) => `${value}${unit}`}) {
    top: 17px;
    right: 76px;
    font-size: 13rem;
  }
`;

export const Anchor = styled.a`
  bottom: 16px;
  right: 20px;
  padding: 10px 20px;
  background: ${({ theme: { colors }}) => colors.white};
  border-radius: 30px;
  margin-top: 10px;
  font-weight: 600;
  color: #333;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
