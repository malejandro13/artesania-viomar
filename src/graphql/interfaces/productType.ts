export interface ProductTypeDataResponse {
  name: string;
  slug: string;
  initiallySelected: boolean;
  category: string;
};

interface ItemsReponse {
  items: ProductTypeDataResponse[];
};

export interface ProductTypeResponse {
  productTypeCollection: ItemsReponse;
};
  