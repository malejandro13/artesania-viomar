import { Skeleton } from '@components/UI/atoms/Skeleton';
import { SkeletonWrapper } from './ProductCardSkeleton.styled';

export const ProductCardSkeleton = () => (
  <SkeletonWrapper>
      <Skeleton variant="rectangular" width={180} height={180} opacity=".2" />
      <Skeleton variant="text"  width={150} opacity=".3" />
  </SkeletonWrapper>
);