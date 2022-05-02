import styled from 'styled-components';

export const FilterWrapper = styled.div`
  background: rgba(255, 255, 255, .2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, .1);
  backdrop-filter: blur(5px);
  padding: 1rem;
  margin: 1rem;
`;

export const ButtonCloseDialog = styled.button`
  position: absolute;
  bottom: 16px;
  right: 20px;
  padding: 10px 20px;
  background: #fff;
  border-radius: 30px;
  margin-top: 10px;
  font-weight: 600;
  color: #111;
  border: none;
  cursor: pointer;
`;

export const ButtonOpenFilter = styled.button`
  background: rgba(255, 255, 255, .2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
  backdrop-filter: blur(5px);
  border: none;
  padding: 1rem;
  color: #fff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 1rem;
`;

export const FilterTitle = styled.div`
  display: flex;
  align-items:center;
`;
