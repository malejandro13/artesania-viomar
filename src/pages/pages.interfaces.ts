import { ProductTypeDataResponse } from "graphql/interfaces/productType";

export enum AlignItems {
  start = 'start',
  center = 'center',
};

type AlignItemsVariants = keyof typeof AlignItems;

export interface SectionProps {
  alignItems?: AlignItemsVariants;
};

export interface LeatherPageProps {
  productTypes: ProductTypeDataResponse[];
};
