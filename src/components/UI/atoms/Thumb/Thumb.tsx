import { useEffect, useState } from 'react';
import { ThumbProps, ThumbList } from './Thumb.interfaces';
import { Image, Item, List } from './Thumb.styled';

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
      {thumbs.map(({ thumbName, dataText, imageURL, imageAltText }: ThumbList) => (
        <Item
          key={`thumb-${thumbName}`}
          data-text={dataText}
          className={selectedThumb === thumbName ? 'active' : ''}
          onClick={() => handleSelectedThumb(thumbName)}
        >
          <Image src={imageURL} alt={imageAltText} />
        </Item>
      ))}
    </List>
  );
};
