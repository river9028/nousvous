import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  max-width: 1200px;

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
  padding: 20px;
  font-size: 1.4em;

  @media (max-width: 45em) {
    width: 100%;
    display: block;
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
