import { MainImageResponse } from 'graphql/interfaces/product';

export interface ProductCardProps {
  mainImage: MainImageResponse;
  images: MainImageResponse[];
  title: string;
  ctaText: string;
  ctaLink: string;
  ctaAriaLabel: string;
  ariaLabel: string;
};
