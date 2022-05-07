import { useState } from 'react';
import { Typography } from '@components/UI/atoms/Typography';
import { ProductCardProps } from './ProductCard.interfaces';
import { Card, ImageBox, ContentBox, Anchor, ImagesSlide, LightBoxButton } from './ProductCard.styled';
import { MainImageResponse } from 'graphql/interfaces/product';
import { LightBox } from '@components/UI/molecules/LightBox';
import { Image } from '@components/UI/atoms/Image';

export const ProductCard = ({
  mainImage: { url, description },
  images,
  title,
  ctaText,
  ctaLink,
  ctaAriaLabel,
}: ProductCardProps) => {
  const [openLightBox, setOpenLightBox] = useState(false);
  const showLightBox = !!images.length;

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
          <Image
            src={url}
            width={250}
            aspectRatio="4:3"
            fit="pad"
            layout="responsive"
            alt={description} 
            onClick={handleClickOpenLightBox}
          />
        </ImageBox>
        {showLightBox && 
          <LightBoxButton onClick={handleClickOpenLightBox}>
            {images.length > 1 ? `${images.length} Fotos` : `${images.length} Fotos`}
          </LightBoxButton>
        } 
        <ContentBox className="contentBx">
          <Typography variant="h2" color="#fff">{title}</Typography>
          <Anchor aria-label={ctaAriaLabel} href={ctaLink} target="_blank">{ctaText}</Anchor>
        </ContentBox>
      </Card>
      {showLightBox && 
        <LightBox open={openLightBox} onClose={handleCloseLightBox}>
          {images.map(({ url, description }: MainImageResponse) => (
            <ImagesSlide
              key={url}
            >
              <Image
                src={url}
                width={600}
                aspectRatio="4:3"
                fit="pad"
                layout="intrinsic"
                alt={description}
              />
            </ImagesSlide>
          ))}
        </LightBox>
      }
    </>
  );
};
