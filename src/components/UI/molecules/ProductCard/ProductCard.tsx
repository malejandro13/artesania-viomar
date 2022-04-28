import { Typography } from "@components/UI/atoms/Typography";
import { ProductCardProps } from "./ProductCard.interfaces";
import { Card, ImageBox, Image, ContentBox, Anchor } from "./ProductCard.styled";

export const ProductCard = ({
  imageUrl,
  imageAltText,
  title,
  ctaText,
  ctaLink,
  ctaAriaLabel,
}: ProductCardProps) => (
  <Card tabIndex={0}>
    <ImageBox>
      <Image src={imageUrl} alt={imageAltText} />
    </ImageBox>
    <ContentBox className="contentBx">
      <Typography variant="h2" color="#fff">{title}</Typography>
      <Anchor aria-label={ctaAriaLabel} href={ctaLink} target="_blank">{ctaText}</Anchor>
    </ContentBox>
  </Card>
);
