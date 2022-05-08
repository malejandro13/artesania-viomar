import Link from 'next/link';
import { Typography } from '@components/UI/atoms/Typography';
import { MainContentProps } from './MainContent.interfaces';
import { Anchor, ImageBox, Main, TextBox } from './MainContent.styled';
import { Image } from '@components/UI/atoms/Image';

export const MainContent = ({
  title,
  description,
  ctaLink,
  ctaText,
  ctaAriaLabel,
  image: { url, description: imageAltText }
}: MainContentProps) => (
  <Main>
    <TextBox>
      <Typography variant="h1">{title}</Typography>
      <div role="region" aria-live="polite">
        <Typography variant="body1">{description}</Typography>
      </div>
      <Link href={ctaLink} passHref>
        <Anchor aria-label={ctaAriaLabel}>{ctaText}</Anchor>
      </Link>
    </TextBox>
    <ImageBox aria-hidden="true">
      <Image
        src={url}
        width={600}
        aspectRatio="4:3"
        fit="pad"
        layout="responsive"
        alt={imageAltText} 
      />
    </ImageBox>
  </Main>
);
