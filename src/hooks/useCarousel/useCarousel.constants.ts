import { CarouselState } from "./useCarousel.interfaces";

export const transitionTime = 400;
export const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
export const smooth = `transform ${transitionTime}ms ease`;

export const initialCarouselState: CarouselState = {
  offset: 0,
  desired: 0,
  active: 0,
};