interface ProductFilter {
  productType?: string;
  AND?: ProductFilter[];
  OR?: ProductFilter[];
};

export interface ProductsProps {
  productFilter: ProductFilter;
}
