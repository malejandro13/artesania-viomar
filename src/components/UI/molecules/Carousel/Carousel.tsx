import { Children } from 'react';
import { useCarousel } from 'hooks/useCarousel';
import { CarouselChild } from './atoms';
import { CarouselProps } from './Carousel.interfaces';
import { CarouselContent, CarouselIndicator, CarouselIndicators, CarouselWrapper } from './Carousel.styled';
import { makeIndices } from './utils/carousel';

export const Carousel = ({
  children,
  slidesPresented = 1,
  interval = 0,
}: CarouselProps) => {
  const slides = Children.toArray(children);
  const length = slides.length;
  const numActive = Math.min(length, slidesPresented);
  const [active, setActive, handlers, style] = useCarousel(length, interval, { slidesPresented: numActive });
  
  const beforeIndices = makeIndices(slides.length - 1, -1, numActive);
  const afterIndices = makeIndices(0, 1, numActive,);

  return (
    length > 0 ? (
      <CarouselWrapper>
        <CarouselIndicators>
          {slides.map((_, index) => (
            <CarouselIndicator
              onClick={() => setActive(index)}
              key={index}
              className={`${active === index ? 'active' : ''}`}
            />
          ))}
        </CarouselIndicators>
        <CarouselContent {...handlers} style={style}>
          {beforeIndices.map(i => (
            <CarouselChild key={`before-indices-${i}`}>{slides[i]}</CarouselChild>
          ))}
          {slides.map((slide, index) => (
            <CarouselChild key={`slide-indices-${index}`}>{slide}</CarouselChild>
          ))}
          {afterIndices.map(i => (
            <CarouselChild key={`after-indices-${i}`}>{slides[i]}</CarouselChild>
          ))}
        </CarouselContent>
      </CarouselWrapper>
    ) : null
  );
};
