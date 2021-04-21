import styled, { css } from 'styled-components';

export const Container = styled.div<{ active: boolean }>`
  margin-right: 30px;

  text-align: center;
  padding: 25px;
  /* font-size: 0px; */
  line-height: 0px;
  padding-top: 50px;
  transition: all 0.2s ease;
  transition-delay: 0.3s;
  box-sizing: border-box;

  @media (min-width: 45em) {
    margin-right: 50px;
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

export const Group = styled.div`
  position: relative;
  display: inline-block;
  outline: none;
`;

export const Thumbnail = styled.img`
  max-width: 100%;
  height: auto;
  transition: all 0.3s ease;
`;

export const Title = styled.h1``;

export const Text = styled.p`
  font-size: 18px;
  font-weight: normal;
  line-height: 1.2379976377;

  &:first-of-type {
    margin: 0px;
  }
`;

export const CardGroup = styled.div`
  border-bottom: 2px solid #111;
  padding-bottom: 30px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  display: inline-block;
  width: 100%;

  :hover {
    ${Thumbnail} {
      transform: translate(0, -10px);
    }
  }

  @media (min-width: 30em) {
    width: 50%;
  }

  @media (min-width: 800px) {
    width: 25%;
  }
`;
