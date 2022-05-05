import { gql } from "@apollo/client";

export const getProductTypes = gql`
  query getProductTypesByCategory(
    $productTypeOrder: ProductTypeOrder,
    $productTypeFilter: ProductTypeFilter
  ) {
    productTypeCollection(
      order: [$productTypeOrder],
      where: $productTypeFilter
    ) {
      items {
        name,
        slug,
        initiallySelected,
        category,
      }
    }
  }
`;
  