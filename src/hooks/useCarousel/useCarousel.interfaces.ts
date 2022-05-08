export interface CarouselState {
  offset: number;
  desired: number;
  active: number;
};

interface CarouselNextAction {
  type: 'next';
  length: number;
};

interface CarouselPrevAction {
  type: 'prev';
  length: number;
};

interface CarouselJumpAction {
  type: 'jump';
  desired: number;
};

interface CarouselDoneAction {
  type: 'done';
};

interface CarouselDragAction {
  type: 'drag';
  offset: number;
};

export type CarouselAction =
  | CarouselJumpAction
  | CarouselNextAction
  | CarouselPrevAction
  | CarouselDragAction
  | CarouselDoneAction;

export interface CarouselOptions {
  slidesPresented?: number;
}