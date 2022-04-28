import { TypographyVariants } from "@constants/typography";

export interface TypographyProps {
  variant: TypographyVariants;
  color?: string;
  children: JSX.Element[] | JSX.Element | string;
}