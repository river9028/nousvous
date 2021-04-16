import styled from 'styled-components';
import * as dotenv from 'dotenv';

dotenv.config();

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: auto;
  box-sizing: border-box;
  padding: 30px 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9;
  font-size: 1.414rem;
  line-height: 1.4em;

  @media (min-width: 45em) {
    font-size: 1.9994rem;
    line-height: 1.4em;
  }
`;

export const Back = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

export const Profile = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  border: 0;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

export const Contact = styled.a`
  font-size: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ::before {
    content: '';
    width: 25px;
    height: 23px;
    background-image: url(${`${process.env.REACT_APP_CDN_PUBLIC_URL}/images/icon/email.svg`});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media (min-width: 50em) {
    font-size: 1.9994rem;
    line-height: 1.4em;

    ::before {
      display: none;
    }
  }
`;
