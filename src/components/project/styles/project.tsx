import styled, { css } from 'styled-components';

export const Wrap = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform: scale(0.9);
  transition: all 0.2s ease;
  z-index: 999;
  box-sizing: border-box;

  ${({ active }) =>
    active &&
    css`
      pointer-events: auto;
      opacity: 1;
      transform: scale(1);
    `}
`;

export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 40px;
  z-index: 999;
  box-sizing: border-box;
`;

export const Contents = styled.div<{
  contentSize: number;
  infoSize: number;
}>`
  box-sizing: border-box;
  // height: 80%;
  // Container의 덜빠진 margin-top '40px'을 빼준다.
  height: ${({ contentSize, infoSize }) => contentSize - infoSize - 40}px;
`;

export const Info = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
`;

export const Title = styled.h2``;

export const Caption = styled.div`
  a {
    color: inherit;
  }
`;

export const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${`${process.env.PUBLIC_URL}/images/icon/close-navy.svg`});
  background-color: transparent;
  border: 0;
  filter: brightness(1) invert(0);
`;
