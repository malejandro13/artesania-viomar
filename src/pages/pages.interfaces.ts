export enum AlignItems {
start = 'start',
center = 'center',
};

type AlignItemsVariants = keyof typeof AlignItems;

export interface SectionProps {
    alignItems?: AlignItemsVariants;
};
