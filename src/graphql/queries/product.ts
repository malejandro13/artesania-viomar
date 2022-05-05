import { gql } from "@apollo/client";

export const getProducts = gql`
  query getProductsByType(
    $productFilter: ProductFilter
  ) {
    productCollection(
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
        imagesCollection {
          items {
            url,
            description,
          },
        },
        ctaText,
        ctaLink,
        ctaAriaLabel,
      }
    }
  }
`;
