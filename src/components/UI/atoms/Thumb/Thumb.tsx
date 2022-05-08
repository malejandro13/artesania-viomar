import { useEffect, useState } from 'react';
import { ThumbProps } from './Thumb.interfaces';
import { Button, Item, List } from './Thumb.styled';
import { Image } from '@components/UI/atoms/Image';

export const Thumb = ({
  thumbs,
  onSelectedThumb = () => {}
}: ThumbProps) => {
  const [selectedThumb, setSelectedThumb] = useState(thumbs[0]?.section);

  const handleSelectedThumb = (thumb: string) => {
    setSelectedThumb(thumb);
  };

  useEffect(() => {
    onSelectedThumb(selectedThumb);
  }, [selectedThumb]);

  return (
    <List aria-label="Secciones de artesanía">
      {thumbs.map(({ title, section, image: { url } }) => (
        <Item
          key={`thumb-${section}`}
          data-text={section}
          className={selectedThumb === section ? 'active' : ''}
          onClick={() => handleSelectedThumb(section)}
        >
          <Button>
            <Image
              src={url}
              width={90}
              aspectRatio="4:3"
              fit="pad"
              layout="intrinsic"
              alt={title} 
            />
          </Button>
        </Item>
      ))}
    </List>
  );
};
