import styled, { css } from 'styled-components';
import * as dotenv from 'dotenv';

dotenv.config();

export const Container = styled.div<{ close: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  max-height: 70vh;
  padding: 40px;
  background: #000;
  color: #fff;
  font-size: 1.414rem;
  line-height: 1.4em;
  z-index: 10;
  max-height: 70vh;
  overflow: auto;
  transition: opacity 0.3s ease;
  box-sizing: border-box;

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
  background-image: url(${`${process.env.REACT_APP_CDN_PUBLIC_URL}/images/icon/close-navy.svg`});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: 0;
  background-color: transparent;
  color: #fff;
  filter: brightness(0) invert(1);

  &:focus {
    outline: 0;
  }
`;

export const Text = styled.p`
  margin: 0px;
  margin-bottom: 1em;

  strong,
  b {
    font-weight: 600;
  }

  &:last-of-type {
    margin-bottom: 0px;
  }

  a {
    color: white;
  }
`;
