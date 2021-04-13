import React from 'react';
import { useHistory } from 'react-router';
import { Container, Back, Profile, Contact } from './styles/header';

type Header = {
  Back: React.FC;
  Profile: React.FC;
  Contact: React.FC;
};

const Header: React.FC & Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const HeaderBack: React.FC = ({ children, ...restProps }) => {
  const history = useHistory();
  return (
    <Back
      onClick={() => {
        history.goBack();
      }}
      {...restProps}
    >
      {children}
    </Back>
  );
};
Header.Back = HeaderBack;

const HeaderProfile: React.FC = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Profile = HeaderProfile;

const HeaderContact: React.FC = ({ children, ...restProps }) => {
  return <Contact {...restProps}>{children}</Contact>;
};
Header.Contact = HeaderContact;

export default Header;
