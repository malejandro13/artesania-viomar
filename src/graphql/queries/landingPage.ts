import { gql } from '@apollo/client';

export const getLandingPageInfo = gql`
  query getLandingPageInfo {
    landingPageCollection {
      items {
        title,
        description,
        ctaText,
        ctaLink,
        ctaAriaLabel,
        image {
          url,
          description,
          width,
          height,
        },
        section,
      }
    }
  }
`;
