import Link from 'next/link';
import { Typography } from '@components/UI/atoms/Typography';
import { MainContentProps } from './MainContent.interfaces';
import { Anchor, Image, ImageBox, Main, TextBox } from './MainContent.styled';

export const MainContent = ({
  title,
  paragraph,
  ctaUrl,
  ctaText,
  ctaAriaLabel,
  imageUrl,
}: MainContentProps) => {
  return (
    <Main>
      <TextBox>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="body1">{paragraph}</Typography>
        <Link href={ctaUrl} passHref>
          <Anchor aria-label={ctaAriaLabel}>{ctaText}</Anchor>
        </Link>
      </TextBox>
      <ImageBox aria-hidden="true">
        <Image src={imageUrl} />
      </ImageBox>
    </Main>
  )
};
