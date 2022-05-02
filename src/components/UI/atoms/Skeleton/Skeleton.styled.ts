import styled, { keyframes } from 'styled-components';
import { SkeletonPros } from './Skeleton.interfaces';

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const SkeletonWrapper = styled.span<SkeletonPros>`
  display: block;
  background: #eee;
  background: linear-gradient(
    110deg,
    rgba(236, 236, 236, ${({ opacity }) => opacity || '1'}) 8%,
    rgba(245, 245, 245, ${({ opacity }) => opacity || '1'}) 18%,
    rgb(236, 236, 236, ${({ opacity }) => opacity || '1'}) 33%
  );
  border-radius: 5px;
  background-size: 200% 100%;
  animation: ${shine} 1.5s linear infinite;
  height: ${({ height }) => height ? `${height}px` : '100%'};
  width: ${({ width }) => width ? `${width}px` : '100%'};

  &.skeleton--variant-circular {
    border-radius: 50%;
  }

  &.skeleton--variant-text {
    height: 1rem;
  }
`;
