interface MainImageResponse {
  url: string;
  description: string;
};

export interface ProductDataResponse {
  title: string;
  productType: string;
  category: string;
  code: string;
  mainImage: MainImageResponse;
  ctaText: string;
  ctaLink: string;
  ctaAriaLabel: string;
};

interface ItemsReponse {
  items: ProductDataResponse[];
};

export interface ProductResponse {
  productCollection: ItemsReponse;
};
