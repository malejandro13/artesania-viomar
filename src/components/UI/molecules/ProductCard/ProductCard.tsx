import { useState } from 'react';
import { Typography } from '@components/UI/atoms/Typography';
import { ProductCardProps } from './ProductCard.interfaces';
import { Card, ImageBox, ContentBox, Anchor, ImagesSlide, LightBoxButton, ProductCode } from './ProductCard.styled';
import { MainImageResponse } from 'graphql/interfaces/product';
import { LightBox } from '@components/UI/molecules/LightBox';
import { Image } from '@components/UI/atoms/Image';
import { colors } from 'styles/theme';

export const ProductCard = ({
  mainImage: { url, description },
  images,
  title,
  ctaText,
  ctaLink,
  ctaAriaLabel,
  ariaLabel,
  code,
}: ProductCardProps) => {
  const [openLightBox, setOpenLightBox] = useState(false);
  const showLightBox = !!images.length;

  const handleClickOpenLightBox = () => {
    setOpenLightBox(true);
  };

  const handleCloseLightBox = () => {
    setOpenLightBox(false);
  };

  const numberOfImages = images.length > 1 ? `${images.length} Fotos` : `${images.length} Foto`;

  return (
    <>
      <Card tabIndex={0} aria-label={ariaLabel}>
        <ProductCode>
          <Typography variant="body2" color={colors.white}>{code}</Typography>
        </ProductCode>
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
          <LightBoxButton
            aria-label={`Este producto tiene ${numberOfImages}. Al hacer click en este botón se abrirá una ventana de dialogo donde podrás ver las fotografías.`}
            onClick={handleClickOpenLightBox}
          >
            {numberOfImages}
          </LightBoxButton>
        }
        <ContentBox className="contentBx">
          <Typography variant="h2" color={colors.white}>{title}</Typography>
          <Anchor
            aria-label="¡Lo quiero!. Al hacer click en este enlace, se abrirá una nueva pestaña para solicitar información sobre el producto a través de Whatsapp"
            href={`https://wa.me/56935091952?text=Me gustaría obtener más información de este producto: ${title}, código ${code}`}
            target="_blank"
          >
            ¡Lo quiero!
          </Anchor>
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
