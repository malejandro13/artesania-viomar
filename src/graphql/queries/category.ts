import { gql } from '@apollo/client';

export const getCategories = gql`
  query getCategories {
    categoryCollection {
      items {
        name,
        slug,
      }
    }
  }
`;
  