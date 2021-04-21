import styled, { css } from 'styled-components';

export const Container = styled.div<{ showLoading: boolean }>`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 35px;
  height: 100%;
  background: #000;
  display: block;
  color: #fff;
  transition: all 0.3s ease;
  z-index: 999;

  @media (min-width: 45em) {
    width: 50px;
  }

  // ::after 해당 요소 이전에, 첫 자식 요소를 하나 생성. | content: '' |와 함께 사용.
  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 100%;
    top: 0px;
    right: 0px;
    transform: translate(100%, 0px);
    background: #000;
  }

  :hover {
    ${({ showLoading }) =>
      !showLoading &&
      css`
        transform: translate(-10px, 0px);
      `}
  }

  ${({ showLoading }) =>
    showLoading &&
    css`
      transform: translateX(calc(-100vw + 35px));

      @media (min-width: 45em) {
        transform: translateX(calc(-100vw + 50px));
      }

      ::after {
        width: 100vw;
      }
    `}
`;

export const Caption = styled.div`
  position: absolute;
  transform: translate(-50%, -50%) rotate(-90deg);
  top: 50%;
  left: 50%;
  width: 100vh;
  text-align: center;
  transform-origin: center;

  @media (min-width: 45em) {
    font-size: 1.999396rem;
    line-height: 1.7505286597;
  }
`;

export const Logo = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const Image = styled.img<{ showLoading: boolean }>`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  opacity: 0;

  ${({ showLoading }) =>
    showLoading &&
    css`
      transition: opacity 1s ease;
      opacity: 1;
    `}
`;
