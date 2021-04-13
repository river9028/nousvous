import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Container, Caption, Logo, Image } from './styles/press-button';
import * as ROUTES from '../../constants/routes';

type Logo = {
  src: string;
};

type PressButton = {
  Caption: React.FC;
  Logo: React.FC<Logo>;
};

const PressButton: React.FC & PressButton = ({ children, ...restProps }) => {
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  return (
    <Container
      showLoading={showLoading}
      onClick={() => {
        console.log('clicked');
        setShowLoading(true);

        setTimeout(() => {
          history.push(ROUTES.PRESS);
        }, 2000);
      }}
      {...restProps}
    >
      {children}
    </Container>
  );
};

const PressButtonCaption: React.FC = ({ children, ...restProps }) => {
  return <Caption {...restProps}>{children}</Caption>;
};
PressButton.Caption = PressButtonCaption;

const PressButtonLogo: React.FC<Logo> = ({ src, children, ...restProps }) => {
  return (
    <Logo {...restProps}>
      <Image src={src} />
    </Logo>
  );
};
PressButton.Logo = PressButtonLogo;

export default PressButton;
