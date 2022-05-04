import { ReactChild, ReactFragment, ReactPortal } from "react";

export interface CarouselChildProps {
  children: (ReactChild | ReactFragment | ReactPortal)[] | (ReactChild | ReactFragment | ReactPortal);
};