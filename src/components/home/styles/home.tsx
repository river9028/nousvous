import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

// 받아올 Props의 타입을 정의
type Background = {
  src?: string;
  backgroundColor?: string;
  active: boolean;
};

export const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 35px;
  width: calc(100vw - 35px);
  height: 100%;

  @media (min-width: 45em) {
    left: 50px;
    width: calc(100vw - 50px);
  }
`;

export const Pane = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  font-size: 0;
`;

export const Text = styled.h1`
  display: inline-block;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
  z-index: 10;
  width: 100%;
  text-align: center;

  @media (min-width: 45em) {
    width: auto;
  }
`;

export const Group = styled.div`
  &:nth-child(1) ${Text} {
    top: 14%;
    left: 50%;
  }
  &:nth-child(2) ${Text} {
    top: 34%;
    left: 50%;
  }
  &:nth-child(3) ${Text} {
    top: 54%;
    left: 50%;
  }
  &:nth-child(4) ${Text} {
    top: 74%;
    left: 50%;
  }

  @media (min-width: 45em) {
    &:nth-child(1) ${Text} {
      left: 75%;
      top: 17%;
    }
    &:nth-child(2) ${Text} {
      left: 25%;
      top: 37%;
    }
    &:nth-child(3) ${Text} {
      left: auto;
      right: 15%;
      top: 57%;
    }
    &:nth-child(4) ${Text} {
      left: 35%;
      top: 77%;
    }
  }
`;

export const TextLink = styled(ReachRouterLink)`
  font-size: 1.414rem;
  line-height: 1.4em;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
`;

// 제네릭을 이용해 정의한 Props 타입을 사용
export const Background = styled.div<Background>`
  ${({ src, backgroundColor }) =>
    src
      ? `background-image: url(${src})`
      : `background-color: ${backgroundColor}`};
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 2;

  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

export const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 0px;
  width: 100%;
  transform: translate(0px, -50%);
`;
