export interface ThumbList {
  thumbName: string;
  dataText: string;
  imageURL: string;
  imageAltText: string;
};

export interface ThumbProps {
  thumbs: ThumbList[];
  onSelectedThumb: Function;
};
