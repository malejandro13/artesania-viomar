import { useCallback } from 'react';
import NextImage, {
  ImageLoaderProps,
} from 'next/image';
import { ImageProps } from './Image.interfaces';
import { calcAspectRatio } from './utils/image';

export const Image = ({
  width,
  fit = 'fill',
  aspectRatio,
  format = 'webp',
  ...nextImageProps
}: ImageProps) => {
  const height = calcAspectRatio(aspectRatio, width);

  const imageLoader = useCallback(
    ({ src, width, quality }: ImageLoaderProps) => {
      const h = calcAspectRatio(aspectRatio, width);

      return `${src}?w=${width}&h=${h}&fit=${fit}&fm=${format}&q=${quality || 75}`;
    },
    [aspectRatio, fit],
  );

  return (
    <NextImage
      {...nextImageProps}
      width={width}
      height={height}
      loader={imageLoader}
    />
  );
};
