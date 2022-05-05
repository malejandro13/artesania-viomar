import { Dialog } from '@components/UI/atoms/Dialog';
import { Carousel } from '@components/UI/molecules/Carousel';
import { LightBoxProps } from './LightBox.interfaces';

export const LightBox = ({ open, onClose, children }: LightBoxProps) => (
  <Dialog open={open} onClose={onClose} fromLightBox={true}>
    <Carousel>
      {children}
    </Carousel>
  </Dialog>
);
