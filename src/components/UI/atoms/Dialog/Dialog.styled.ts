import styled from 'styled-components';
import { DialogWrapperProps } from './Dialog.interfaces';

export const DialogWrapper = styled.div<DialogWrapperProps>`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(85, 63, 49, 0.4);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: all .4s;
  z-index: 20;
  
  ${({ open }) => open && `
    visibility: visible;
    opacity: 1;
  `}
`;

export const DialogContent = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  padding: 2rem 1rem 5rem 1rem;
  margin: .5rem;
  width: 500px;
  max-width: 90%;
`;

export const DialogClose = styled.button`
  background: none;
  border: none;
  cursor pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
`;
