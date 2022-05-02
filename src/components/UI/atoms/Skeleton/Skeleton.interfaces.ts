export enum SkeletonElements {
  circular = 'circular',
  rectangular = 'rectangular',
  text = 'text',
};

type SkeletonVariants = keyof typeof SkeletonElements;

export interface SkeletonPros {
  height?: number | string;
  width?: number | string;
  variant?: SkeletonVariants;
  opacity?: number | string;
};
