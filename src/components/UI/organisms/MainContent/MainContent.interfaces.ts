export interface Image {
  url: string;
  description: string;
};

export interface MainContentProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  ctaAriaLabel: string;
  image: Image;
};
