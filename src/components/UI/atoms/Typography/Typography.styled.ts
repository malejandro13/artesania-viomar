import styled from "styled-components";

export const Text = styled.p`
  color: ${({ theme: { colors }, color }) => color ? color : colors.white};

  &.typography--variant-h1 {
    font-size: 6rem;
    line-height: 1.2em;
    font-weight: 700;
  }
  
  &.typography--variant-h2 {
    font-size: 3.75rem;
    font-weight: 600;
  }
  
  &.typography--variant-h3 {
    font-size: 3rem;
    font-weight: 500;
  }
  
  &.typography--variant-h4 {
    font-size: 2.125rem;
    font-weight: 500;
  }
  
  &.typography--variant-h5 {
    font-size: 1.5rem;
    font-weight: 500;
  }
  
  &.typography--variant-h6 {
    font-size: 1.25rem;
    font-weight: 500;
  }
  
  &.typography--variant-subheading1 {
    font-size: 1rem;
    font-weight: 500;
  }
  
  &.typography--variant-subheading2 {
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  &.typography--variant-body1 {
    font-size: 1.25rem;
  }

  &.typography--variant-body2 {
    font-size: 1rem;
  }
  
  &.typography--variant-body3 {
    font-size: 0.875rem;
  }
`;
