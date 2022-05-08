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
            <li key={index}>
              <CarouselIndicator
                aria-label={`Seleccionar imagen ${index + 1} de ${length}`}
                onClick={() => setActive(index)}
                className={`${active === index ? 'active' : ''}`}
                tabIndex={0}
              />
            </li>
          ))}
        </CarouselIndicators>
        <CarouselContent {...handlers} style={style}>
          {beforeIndices.map(i => (
            <CarouselChild ariaHidden key={`before-indices-${i}`}>{slides[i]}</CarouselChild>
          ))}
          {slides.map((slide, index) => (
            <CarouselChild
              key={`slide-indices-${index}`}
              ariaHidden={active !== index}
            >
              {slide}
            </CarouselChild>
          ))}
          {afterIndices.map(i => (
            <CarouselChild ariaHidden key={`after-indices-${i}`}>{slides[i]}</CarouselChild>
          ))}
        </CarouselContent>
      </CarouselWrapper>
    ) : null
  );
};
