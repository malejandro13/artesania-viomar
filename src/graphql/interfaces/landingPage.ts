export interface MainImageResponse {
  url: string;
  description: string;
  width: number;
  height: number;
};

export interface LandingPageDataResponse {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  ctaAriaLabel: string;
  image: MainImageResponse,
  section: string;
};

interface ItemsReponse {
  items: LandingPageDataResponse[];
};

export interface LandingPageResponse {
  landingpageCollection: ItemsReponse;
};
