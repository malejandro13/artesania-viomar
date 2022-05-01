interface ProductFilter {
  productType?: string;
  OR?: ProductFilter[];
};

export interface ProductsProps {
  productFilter: ProductFilter;
}
