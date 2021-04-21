import styled from 'styled-components';
import * as dotenv from 'dotenv';

dotenv.config();

export const Container = styled.div`
  position: absolute;
  width: calc(100vw - 35px);
  top: 0px;
  right: 35px;
  height: auto;
  box-sizing: border-box;
  padding: 30px 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  z-index: 9;
  font-size: 1.414rem;
  font-weight: bold;
  line-height: 1.4em;

  @media (min-width: 45em) {
    right: 50px;
    width: calc(100vw - 50px);
  }
`;

export const Left = styled.div`
  border: 0;
  background: transparent;

  @media (max-width: 50em) {
    display: none;
  }
`;

export const Center = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  background: transparent;

  @media (max-width: 50em) {
    position: relative;
    left: 0;
    transform: translate(0, 0);
  }
`;

export const Right = styled.div``;

export const Link = styled.a`
  cursor: pointer;
`;

export const Image = styled.img`
  height: 60px;
  filter: brightness(0) invert(0);
`;
