import React, { createContext, useContext, useState } from 'react';
import { Container, Caption, Logo, Image } from './styles/press-button';

type Logo = {
  src: string;
};

type PressButton = {
  Caption: React.FC;
  Logo: React.FC<Logo>;
};

const PressButton: React.FC & PressButton = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
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
