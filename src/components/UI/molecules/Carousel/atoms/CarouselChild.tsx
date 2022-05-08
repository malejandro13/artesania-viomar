import { CarouselChildProps } from './CarouselChild.interfaces';
import { CarouselItem } from './CarouselChild.styled';

export const CarouselChild = ({ children, ariaHidden }: CarouselChildProps) => (
  <CarouselItem aria-hidden={ariaHidden}>{children}</CarouselItem>
);
