import { useEffect, useState } from 'react';
import { ThumbProps, ThumbObject } from './Thumb.interfaces';
import { Button, Item, List } from './Thumb.styled';
import { Image } from '@components/UI/atoms/Image';

export const Thumb = ({
  thumbs,
  onSelectedThumb = () => {}
}: ThumbProps) => {
  const [firstThumb] = thumbs;
  const [selectedThumb, setSelectedThumb] = useState(firstThumb.thumbName);

  const handleSelectedThumb = (thumb: string) => {
    setSelectedThumb(thumb);
  };

  useEffect(() => {
    onSelectedThumb(selectedThumb);
  }, [selectedThumb]);

  return (
    <List>
      {thumbs.map(({ thumbName, dataText, imageURL, imageAltText }: ThumbObject) => (
        <Item
          key={`thumb-${thumbName}`}
          data-text={dataText}
          className={selectedThumb === thumbName ? 'active' : ''}
          onClick={() => handleSelectedThumb(thumbName)}
        >
          <Button>
            <Image
              src={imageURL}
              width={90}
              aspectRatio="4:3"
              fit="pad"
              layout="intrinsic"
              alt={imageAltText} 
            />
          </Button>
        </Item>
      ))}
    </List>
  );
};
