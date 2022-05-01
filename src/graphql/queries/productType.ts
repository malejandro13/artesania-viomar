import { gql } from "@apollo/client";

export const getProductTypes = gql`
  query {
    productTypeCollection {
      items {
        name,
        slug,
        initiallySelected,
      }
    }
  }
`;
  