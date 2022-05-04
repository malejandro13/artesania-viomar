import { useReducer, useEffect } from 'react';
import { useSwipeable, SwipeableHandlers } from 'react-swipeable';
import { elastic, initialCarouselState, smooth, transitionTime } from './useCarousel.constants';
import { CarouselOptions } from './useCarousel.interfaces';
import { carouselReducer, swiped } from './useCarousel.utils';

export function useCarousel(
  length: number,
  interval: number,
  options: CarouselOptions = {},
): [number, (n: number) => void, SwipeableHandlers, React.CSSProperties] {
  const { slidesPresented = 1 } = options;
  const shadowSlides = 2 * slidesPresented;
  const n = Math.max(1, Math.min(slidesPresented, length));
  const totalWidth = 100 / n;
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);
  const handlers = useSwipeable({
    onSwiping(e) {
      dispatch({
        type: 'drag',
        offset: -e.deltaX,
      });
    },
    onSwipedLeft(e) {
      swiped(e, dispatch, length, -1);
    },
    onSwipedRight(e) {
      swiped(e, dispatch, length, 1);
    },
    trackMouse: true,
    trackTouch: true,
    rotationAngle: 180,
  });

  useEffect(() => {
    if(interval){
      const id = setTimeout(() => dispatch({ type: 'next', length }), interval);
      return () => clearTimeout(id);
    }
  }, [state.offset, state.active]);

  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'done' }), transitionTime);
    return () => clearTimeout(id);
  }, [state.desired]);

  const style: React.CSSProperties = {
    transform: 'translateX(0)',
    width: `${totalWidth * (length + shadowSlides)}%`,
    left: `-${(state.active + 1) * totalWidth}%`,
  };

  if (state.desired !== state.active) {
    const dist = Math.abs(state.active - state.desired);
    const pref = Math.sign(state.offset || 0);
    const dir = (dist > length / 2 ? 1 : -1) * Math.sign(state.desired - state.active);
    const shift = (totalWidth * (pref || dir)) / (length + shadowSlides);
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (!isNaN(state.offset)) {
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  return [state.active, n => dispatch({ type: 'jump', desired: n }), handlers, style];
};
