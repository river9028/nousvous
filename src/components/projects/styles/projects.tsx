import styled, { css } from 'styled-components';

export const Container = styled.div<{ active: boolean }>`
  text-align: center;
  padding: 25px;
  font-size: 0px;
  line-height: 0px;
  padding-top: 50px;
  transition: all 0.2s ease;
  transition-delay: 0.3s;
  box-sizing: border-box;

  @media (min-width: 45em) {
    padding: 40px;
    padding-top: 60px;
  }
  ${({ active }) =>
    active &&
    css`
      transform: scale(0.95);
      opacity: 0;
      transition-delay: 0s;
    `}
`;

export const Card = styled.div<{ thumbSize: 'small' | 'medium' | 'large' }>`
  display: inline-block;
  padding: 30px;

  @media (min-width: 45em) {
    ${({ thumbSize }) =>
      thumbSize === 'small' &&
      css`
        width: 30%;
      `};

    ${({ thumbSize }) =>
      thumbSize === 'medium' &&
      css`
        width: 60%;
      `};

    ${({ thumbSize }) =>
      thumbSize === 'large' &&
      css`
        width: 80%;
      `};
  }
`;

export const Group = styled.div`
  position: relative;
  display: inline-block;
  outline: none;
`;

export const Thumbnail = styled.img`
  max-width: 100%;
  height: auto;
`;

export const TitleWrap = styled.a<{ backgroundColor: string }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #888;
  opacity: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
    background-color: ${({ backgroundColor }) => backgroundColor};
  }
`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0px 30px;
  transform: translate(-50%, -50%);
  font-size: 1.414rem;
  line-height: 1.4em;
  color: #fff;
  font-weight: bold;
  width: 100%;
  margin: 0;

  @media (min-width: 45em) {
    font-size: 1.9994rem;
    line-height: 1.4em;
  }
`;
