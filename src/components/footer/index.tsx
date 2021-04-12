import React, { createContext, useContext, useState } from 'react';
import { Container, Frame, Form, Input, Group, Button } from './styles/footer';

type Footer = {
  Frame: React.FC;
  Form: React.FC;
  Group: React.FC;
  Input: React.FC;
  Button: React.FC;
};

const Footer: React.FC & Footer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const FooterFrame: React.FC = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};
Footer.Frame = FooterFrame;

const FooterForm: React.FC = ({ children, ...restProps }) => {
  return <Form {...restProps}>{children}</Form>;
};
Footer.Form = FooterForm;

const FooterInput: React.FC = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};
Footer.Input = FooterInput;

const FooterGroup: React.FC = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};
Footer.Group = FooterGroup;

const FooterButton: React.FC = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};
Footer.Button = FooterButton;

export default Footer;
