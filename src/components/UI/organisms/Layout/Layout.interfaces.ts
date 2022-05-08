export enum AlignItems {
  start = 'start',
  center = 'center',
};

type AlignItemsVariants = keyof typeof AlignItems;

export interface SectionProps {
  alignItems?: AlignItemsVariants;
};

export interface LayoutProps {
  children: JSX.Element [] | JSX.Element;
  alignItems?: AlignItemsVariants;
};
