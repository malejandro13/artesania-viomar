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
          width,
          height,
        },
        imagesCollection {
          items {
            url,
            description,
            width,
            height,
          },
        },
        ctaText,
        ctaLink,
        ctaAriaLabel,
      }
    }
  }
`;
