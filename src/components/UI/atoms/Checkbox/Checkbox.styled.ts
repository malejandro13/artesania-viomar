import styled from "styled-components";

export const InputGroup = styled.div`
  background-color: rgba(255, 255, 255, .2);
  display: block;
  margin: 10px 0;
  border-radius: 10px;
  position: relative;

  &:focus-within {
    outline-offset: 1px;
    outline: -webkit-focus-ring-color auto 1px;
  }
`;

export const Input = styled.input`
  width: 32px;
  height: 32px;
  order: 1;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0;
`;

export const Label = styled.label`
  padding: 12px 16px;
  width: 100%;
  display: block;
  text-align: left;
  border-radius: 10px;
  color: ${({ theme: { colors }}) => colors.white};
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;

  &::before {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    content: '';
    background-color: #7f695c;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale3d(1, 1, 1);
    transition: all 300ms cubic-bezier(.4, .0, .2, 1);
    opacity: 0;
    z-index: -1;
  }

  &::after {
    width: 32px;
    height: 32px;
    content: '';
    background-color: rgba(255, 255, 255, .5);
    background-repeat: no-repeat;
    background-position: 3px 4px;
    border-radius: 50%;
    z-index: 2;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    transition: all 200ms ease-in;
  }

  ${Input}:checked + && {
    &:before {
      transform: translate(-50%, -50%) scale3d(56, 56, 1);
      opacity: 1;
    }
    &:after {
      background-color: #553f31;
      background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
    }
  }
    
`;
