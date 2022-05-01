import { gql } from "@apollo/client";

export const getProductsByType = gql`
  query getProductsByType(
    $productOrder: ProductOrder,
    $productFilter: ProductFilter
  ) {
    productCollection(
      order: [$productOrder],
      where: $productFilter
    ) {
      items {
        title,
        productType,
        category,
        code,
        mainImage {
          url,
          description,
        },
        ctaText,
        ctaLink,
        ctaAriaLabel,
      }
    }
  }
`;
