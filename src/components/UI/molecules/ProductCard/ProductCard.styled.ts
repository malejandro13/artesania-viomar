import styled from "styled-components";

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  position: relative;
  width: 320px;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #7f695c;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover::before,
  &:focus-visible::before,
  &:focus-within::before {
    clip-path: circle(300px at 50% -3%);
  }

  &::after {
    content: "VIOMAR";
    position: absolute;
    top: 65%;
    left: -5%;
    font-size: 5em;
    font-weight: 800;
    font-style: italic;
    color: rgba(0,0,0,0.04);
  }

  &:focus-visible {
    outline-offset: 1px;
    -webkit-focus-ring-color auto 1px;
  }
`;

export const ImageBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  width: 100%;
  height: 100%;
  transition: .3s;

  ${Card}:hover & {
    top: 0%;
    transform: translateY(-25%);
  }
  ${Card}:focus-within & {
    top: 0%;
    transform: translateY(-25%);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
`;

export const ContentBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: .7s;
  z-index: 90;

  ${Card}:hover & {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  ${Card}:focus-within & {
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Anchor = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 30px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: .3s;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: .5s;
  }
  ${Card}:focus-within & {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: .5s;
  }
`;
