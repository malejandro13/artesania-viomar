import { CarouselChildProps } from './CarouselChild.interfaces';
import { CarouselItem } from './CarouselChild.styled';

export const CarouselChild = ({ children }: CarouselChildProps) => (
  <CarouselItem>{children}</CarouselItem>
);
