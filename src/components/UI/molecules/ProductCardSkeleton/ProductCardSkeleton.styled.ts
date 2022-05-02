import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #eee;
  background: linear-gradient(
    110deg,
    rgba(236, 236, 236, 0.2) 8%,
    rgba(245, 245, 245, 0.2) 18%,
    rgb(236, 236, 236, 0.2) 33%
  );
  background-size: 200% 100%;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, .1);
  backdrop-filter: blur(5px);
  position: relative;
  width: 300px;
  height: 450px;
  animation: ${shine} 1.5s linear infinite;

  @media (min-width: ${({theme: { breakpoints: { medium: { value, unit }}}}) => `${value}${unit}`}) {
    width: 260px;
  }

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    width: 295px;
  }
`;
