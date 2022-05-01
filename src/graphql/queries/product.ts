import { gql } from "@apollo/client";

export const getProductsByType = gql`
  query getProductsByType($productFilter: ProductFilter) {
    productCollection(where: $productFilter) {
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
