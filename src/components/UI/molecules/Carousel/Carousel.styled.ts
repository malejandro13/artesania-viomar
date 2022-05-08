import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 2rem 0rem;
`;

export const CarouselIndicators = styled.ol`
  position: absolute;
  right: 0;
  bottom: 0.5em;
  left: 0;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  list-style: none;
  margin: 0 auto;
`;

export const CarouselIndicator = styled.button`
  position: relative;
  flex: 0 1 auto;
  width: .8em;
  height: .8em;
  border-radius: 50%;
  margin: 0 0.3em;
  border: 2px solid #fff;
  cursor: pointer;
  background: initial;
  &:hover {
    background: #fff;
  }
  &.active {
    background: #fff;
    cursor: default;
    width: 1em;
    height: 1em;
  }
`;

export const CarouselContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
`;

