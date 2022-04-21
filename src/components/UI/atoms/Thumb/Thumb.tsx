import { useEffect, useState } from 'react';
import { ThumbProps, ThumbObject } from './Thumb.interfaces';
import { Button, Image, Item, List } from './Thumb.styled';

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
            <Image src={imageURL} alt={imageAltText} />
          </Button>
        </Item>
      ))}
    </List>
  );
};
