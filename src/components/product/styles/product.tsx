import styled, { css } from 'styled-components';
import { Container as CarouselContainer } from '../../carousel/styles/carousel';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

  margin-right: 30px;

  text-align: center;
  padding: 25px;
  /* font-size: 0px; */
  line-height: 0px;
  padding-top: 100px;
  transition: all 0.2s ease;
  transition-delay: 0.3s;
  box-sizing: border-box;

  @media (min-width: 45em) {
    margin-right: 50px;
    padding: 40px;
    padding-top: 100px;
  }

  ${CarouselContainer} {
    position: unset;
    transform: unset;
    top: unset;
  }
`;

export const Container = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;

  @media (max-width: 45em) {
    display: block;
  }
`;

export const Group = styled.div`
  text-align: initial;
  line-height: normal;
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
  padding: 40px;
  font-size: 1.4em;
  flex: 6;

  @media (max-width: 45em) {
    width: 100%;
    display: block;
  }

  &:last-of-type {
    flex: 3;
  }
`;

export const Text = styled.p`
  padding-bottom: 40px;
  margin: 0;
`;

export const Heading = styled.h4`
  margin: 0;
  padding-bottom: 10px;
`;

export const TextLink = styled.div`
  padding-bottom: 10px;
  margin: 0;

  &:last-of-type {
    padding-bottom: 40px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 2px solid #000;
  font-size: 1em;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-color: #000;
`;
