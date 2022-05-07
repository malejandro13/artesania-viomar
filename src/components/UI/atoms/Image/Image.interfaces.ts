import {
  ImageProps as NextImageProps,
} from 'next/image';

export type ImageFit = 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';

export type AspectRatio = '16:9' | '4:3' | '1:1' | '3:2' | '9:12' | number;

export type ImageLayout = 'fill' | 'fixed' | 'intrinsic' | 'responsive';

export type ImageFormat = 'jpg' | 'png' | 'webp' | 'gif' | 'avif';

type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

export type ImageProps = {
  width: number;
  layout: ImageLayout;
  aspectRatio: AspectRatio;
  fit?: ImageFit;
  format?: ImageFormat;
} & DistributiveOmit<NextImageProps, 'height'>;