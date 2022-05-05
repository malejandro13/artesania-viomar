export interface MainImageResponse {
  url: string;
  description: string;
};

interface ItemsImagesReponse {
  items: MainImageResponse[];
};

export interface ProductDataResponse {
  title: string;
  productType: string;
  category: string;
  code: string;
  mainImage: MainImageResponse;
  imagesCollection: ItemsImagesReponse;
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
