import { SkeletonElements, SkeletonPros } from './Skeleton.interfaces';
import { SkeletonWrapper } from './Skeleton.styled';

export const Skeleton = ({
  variant = SkeletonElements.rectangular,
  height,
  width,
  opacity,
}: SkeletonPros) => (
  <SkeletonWrapper
    className={`skeleton--variant-${variant}`}
    height={height}
    width={width}
    opacity={opacity}
  />
);
