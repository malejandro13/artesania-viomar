interface MainImageResponse {
  url: string;
  description: string;
};

export interface ProductResponse {
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
  items: ProductResponse[];
};

export interface ProductsResponse {
  productCollection: ItemsReponse;
};
