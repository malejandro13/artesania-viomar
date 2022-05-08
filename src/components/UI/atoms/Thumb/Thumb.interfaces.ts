export interface Image {
  url: string;
  description: string;
}

export interface Thumb {
  title: string;
  section: string;
  image: Image;
};

export interface ThumbProps {
  thumbs: Thumb[];
  onSelectedThumb: Function;
};
