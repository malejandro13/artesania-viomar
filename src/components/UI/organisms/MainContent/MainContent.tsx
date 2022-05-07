import Link from 'next/link';
import { Typography } from '@components/UI/atoms/Typography';
import { MainContentProps } from './MainContent.interfaces';
import { Anchor, ImageBox, Main, TextBox } from './MainContent.styled';
import { Image } from '@components/UI/atoms/Image';

export const MainContent = ({
  title,
  paragraph,
  ctaUrl,
  ctaText,
  ctaAriaLabel,
  imageUrl,
  imageAltText,
}: MainContentProps) => (
  <Main>
    <TextBox>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="body1">{paragraph}</Typography>
      <Link href={ctaUrl} passHref>
        <Anchor aria-label={ctaAriaLabel}>{ctaText}</Anchor>
      </Link>
    </TextBox>
    <ImageBox aria-hidden="true">
      <Image
        src={imageUrl}
        width={600}
        aspectRatio="4:3"
        fit="pad"
        layout="responsive"
        alt={imageAltText} 
      />
    </ImageBox>
  </Main>
);
