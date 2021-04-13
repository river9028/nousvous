import styled, { css } from 'styled-components';

export const Container = styled.div<{ showLoading: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
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

  // ::before 해당 요소 이전에, 첫 자식 요소를 하나 생성. | content: '' |와 함께 사용.
  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 100%;
    top: 0px;
    left: 0px;
    transform: translate(-100%, 0px);
    background: #000;
  }

  :hover {
    ${({ showLoading }) =>
      !showLoading &&
      css`
        transform: translate(10px, 0px);
      `}
  }

  ${({ showLoading }) =>
    showLoading &&
    css`
      transform: translate(100vw, 0px);

      ::before {
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
    font-size: 1.414rem;
    line-height: 1.4em;
  }
`;

export const Logo = styled.div`
  position: absolute;
  bottom: 20px;
  width: 90%;
  left: 5%;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
