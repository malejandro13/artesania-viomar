import { useState } from 'react';
import { Typography } from '@components/UI/atoms/Typography';
import { ProductCardProps } from './ProductCard.interfaces';
import { Card, ImageBox, Image, ContentBox, Anchor, ImagesSlide, LightBoxButton } from './ProductCard.styled';
import { MainImageResponse } from 'graphql/interfaces/product';
import { LightBox } from '@components/UI/molecules/LightBox';

export const ProductCard = ({
  mainImage: { url, description },
  images,
  title,
  ctaText,
  ctaLink,
  ctaAriaLabel,
}: ProductCardProps) => {
  const [openLightBox, setOpenLightBox] = useState(false);
  const [showLightBox] = useState(images.length > 1)  

  const handleClickOpenLightBox = () => {
    setOpenLightBox(true);
  };

  const handleCloseLightBox = () => {
    setOpenLightBox(false);
  };

  return (
    <>
      <Card tabIndex={0}>
        <ImageBox>
          <Image src={url} alt={description} onClick={handleClickOpenLightBox} />
        </ImageBox>
        {showLightBox && 
          <LightBoxButton onClick={handleClickOpenLightBox}>{`${images.length} Fotos`}</LightBoxButton>
        } 
        <ContentBox className="contentBx">
          <Typography variant="h2" color="#fff">{title}</Typography>
          <Anchor aria-label={ctaAriaLabel} href={ctaLink} target="_blank">{ctaText}</Anchor>
        </ContentBox>
      </Card>
      {showLightBox && 
        <LightBox open={openLightBox} onClose={handleCloseLightBox}>
          {images.map(({ url }: MainImageResponse) => (
            <ImagesSlide
              key={url}
              style={{ backgroundImage: `url(${url})` }}
            />
          ))}
        </LightBox>
      }
    </>
  );
};
