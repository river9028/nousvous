import styled, { css } from 'styled-components';

export const Container = styled.div<{ close: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  padding: 40px;
  background: #f04e53;
  color: #281246;
  font-size: 1.414rem;
  line-height: 1.4em;
  z-index: 999;
  max-height: 70vh;
  overflow: auto;
  transition: opacity 0.3s ease;

  ${({ close }) =>
    close &&
    css`
      opacity: 0;
      pointer-events: none;
    `};

  @media (min-width: 45em) {
    font-size: 1.414rem;
    line-height: 1.4em;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url('images/icon/close-navy.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: 0;
  background-color: transparent;

  &:focus {
    outline: 0;
  }
`;

export const Text = styled.p`
  margin: 0px;
  margin-bottom: 1em;

  &:last-of-type {
    margin-bottom: 0px;
  }
`;
