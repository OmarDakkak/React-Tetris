import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #8644B9;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback} className="animated flash">Start Game</StyledStartButton>
);

export default StartButton;
