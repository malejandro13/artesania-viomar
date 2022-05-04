import { SwipeEventData } from 'react-swipeable';
import { CarouselAction, CarouselState } from './useCarousel.interfaces';

export const previous = (length: number, current: number) => (current - 1 + length) % length;

export const next = (length: number, current: number) => (current + 1) % length;

export const threshold = (target: EventTarget | null) => {
  const width = (target as HTMLElement).clientWidth;
  return width / 3;
};

export function swiped(e: SwipeEventData, dispatch: React.Dispatch<CarouselAction>, length: number, dir: 1 | -1) {
  const t = threshold(e.event.target);
  const d = dir * e.deltaX;
  if (d >= t) {
    dispatch({
      type: dir > 0 ? 'next' : 'prev',
      length,
    });
  } else {
    dispatch({
      type: 'drag',
      offset: 0,
    });
  }
};

export const carouselReducer = (state: CarouselState, action: CarouselAction): CarouselState => {
  switch (action.type) {
    case 'jump':
      return {
        ...state,
        desired: action.desired,
      };
    case 'next':
      return {
        ...state,
        desired: next(action.length, state.active),
      };
    case 'prev':
      return {
        ...state,
        desired: previous(action.length, state.active),
      };
    case 'done':
      return {
        ...state,
        offset: NaN,
        active: state.desired,
      };
    case 'drag':
      return {
        ...state,
        offset: action.offset,
      };
    default:
      return state;
  }
};
