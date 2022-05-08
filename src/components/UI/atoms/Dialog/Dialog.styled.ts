import styled from 'styled-components';
import { DialogWrapperProps, DialogContentProps } from './Dialog.interfaces';

export const DialogWrapper = styled.dialog<DialogWrapperProps>`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(85, 63, 49, .4);
  backdrop-filter: blur(5px);
  transition: all .4s;
  z-index: 20;

  ${({ fromLightBox }) => fromLightBox && `
    background: rgba(0, 0, 0, .4);
    backdrop-filter: blur(15px);
  `}
  
  ${({ open }) => open && `
    visibility: visible;
    opacity: 1;
  `}
`;

export const DialogContent = styled.div<DialogContentProps>`
  position: relative;
  padding: 2rem 1rem 5rem 1rem;
  margin: .5rem;
  max-width: 90%;
  width: 100%;
  ${({ fromLightBox }) => !fromLightBox && `
    background: rgba(255, 255, 255, .3);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, .1);
    backdrop-filter: blur(5px);
    width: 500px;
  `}
`;

export const DialogClose = styled.button`
  background: none;
  border: none;
  cursor pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${({ theme: { colors }}) => colors.white};
  text-decoration: none;
  font-size: 3rem;
  z-index: 1;
`;
