export interface ProductTypeDataResponse {
  name: string,
  slug: string,
  initiallySelected: boolean,
};

interface ItemsReponse {
  items: ProductTypeDataResponse[];
};

export interface ProductTypeResponse {
  productTypeCollection: ItemsReponse;
};
  