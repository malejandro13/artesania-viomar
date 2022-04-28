export interface ThumbObject {
  thumbName: string;
  dataText: string;
  imageURL: string;
  imageAltText: string;
};

export interface ThumbProps {
  thumbs: ThumbObject[];
  onSelectedThumb: Function;
};
