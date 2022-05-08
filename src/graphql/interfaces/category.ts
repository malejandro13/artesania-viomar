export interface CategoryDataResponse {
  name: string;
  slug: string;
};

interface ItemsReponse {
  items: CategoryDataResponse[];
};

export interface CategoryResponse {
  categoryCollection: ItemsReponse;
};
    