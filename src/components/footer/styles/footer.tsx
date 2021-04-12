import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  padding: 30px;
  z-index: 20;
  box-sizing: border-box;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.414rem;
  line-height: 1.4em;

  @media (min-width: 45em) {
    justify-content: space-between;
  }
`;

export const Form = styled.form`
  display: none;
  @media (min-width: 45em) {
    display: block;
  }
`;

export const Input = styled.input`
  border: 0px;
  border-bottom: 1px solid #000;
  -webkit-appearance: none;
  border-radius: 0px;
  outline: none;
  line-height: 1em;
  padding: 0px;
  background: transparent;
`;

export const Group = styled.form`
  margin: 0px;
  padding: 0px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;

  ::after {
    content: '/';
  }

  &:last-of-type {
    ::after {
      content: '';
    }
  }
`;
