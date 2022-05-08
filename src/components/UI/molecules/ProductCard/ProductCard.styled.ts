import styled from 'styled-components';

export const Card = styled.div`
  background: rgba(255, 255, 255, .05);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, .1);
  backdrop-filter: blur(5px);
  position: relative;
  width: 300px;
  height: 450px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #7f695c;
    clip-path: circle(300px at 50% -3%);
    transition: .5s ease-in-out;
  }

  &::after {
    content: "VIOMAR" / "";
    position: absolute;
    top: 65%;
    left: -5%;
    font-size: 4.6em;
    font-weight: 800;
    font-style: italic;
    color: rgba(0,0,0,.04);
  }

  &:focus-visible {
    outline-offset: 1px;
    outline: -webkit-focus-ring-color auto 1px;
  }

  @media (min-width: ${({theme: { breakpoints: { medium: { value, unit }}}}) => `${value}${unit}`}) {
    width: 260px;
    &::after {
      left: -4%;
      font-size: 4em;
    }
  }

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    width: 295px;

    &::before {
      clip-path: circle(150px at 80% 20%);
    }

    &:hover::before,
    &:focus-visible::before,
    &:focus-within::before {
      clip-path: circle(300px at 50% -3%);
    }

    &::after {
      left: -5%;
      font-size: 4.6em;
    }
  }
`;

export const ImageBox = styled.div`
  position: absolute;
  top: 0%;
  transform: translateY(-20%);
  z-index: 2;
  width: 100%;
  height: 100%;
  transition: .3s;

  & > span {
    transform: translate(0%, 50%);
    cursor: pointer;
  }

  @media (min-width: ${({theme: { breakpoints: { medium: { value, unit }}}}) => `${value}${unit}`}) {
    top: 0%;
    transform: translateY(-16%);
  }

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    top: 50%;
    transform: translateY(-50%);

    ${Card}:hover & {
      top: 0%;
      transform: translateY(-19%);
    }
    ${Card}:focus-within & {
      top: 0%;
      transform: translateY(-19%);
    }
  }
`;


export const ContentBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  transition: .7s;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 1;

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    height: 100px;

    ${Card}:hover & {
      height: 250px;
    }
    ${Card}:focus-within & {
      height: 250px;
    }
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
  opacity: 1;
  transform: translateY(0px);
  transition: .3s;

  @media (min-width: ${({theme: { breakpoints: { large: { value, unit }}}}) => `${value}${unit}`}) {
    opacity: 0;
    transform: translateY(50px);

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
  }

  
`;

export const ImagesSlide = styled.div`
  position: relative;
  height: 70vh;
  max-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  & img {
    pointer-events: none;
  }
`;

export const LightBoxButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  background: rgba(255, 255, 255, .2);
  border: none;
  border-bottom-left-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 3;
`;
