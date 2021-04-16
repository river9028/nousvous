import styled, { css } from 'styled-components';
import * as dotenv from 'dotenv';

dotenv.config();

type Group = {
  showSidePanel: boolean;
};

export const Container = styled.div``;

export const Group = styled.div<Group>`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 80%;
  max-width: 400px;
  height: 100%;
  background: #f193a2;
  z-index: 20;
  transform: translate(100%, 0px);
  transition: transform 0.3s ease;
  overflow: auto;
  padding: 30px;
  box-sizing: border-box;

  transform: ${({ showSidePanel }) =>
    showSidePanel ? 'translate(0px, 0px)' : 'translate(100%, 0px)'};

  &:first-child {
    padding-top: 60px;
    background: #d2dccb;
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

  &:focus {
    outline: 0;
  }
`;

export const TextLink = styled.a`
  color: #000;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
