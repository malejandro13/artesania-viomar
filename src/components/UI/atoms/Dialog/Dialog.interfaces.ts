export interface DialogProps {
  children: JSX.Element[] | JSX.Element;
  fromLightBox?: boolean;
  open: boolean;
  onClose: Function;
};

export interface DialogWrapperProps {
  open: boolean;
  fromLightBox?: boolean;
};

export interface DialogContentProps {
  fromLightBox?: boolean;
};
