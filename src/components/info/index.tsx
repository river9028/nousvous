import React from 'react';
import {
  Wrapper,
  Container,
  Group,
  Heading,
  Text,
  TextLink,
  Input,
  Button,
} from './styles/info';

type Info = {
  Group: React.FC;
  Text: React.FC;
  Heading: React.FC;
  TextLink: React.FC;
  Button: React.FC;
  Input: React.FC<{ placeholder: string }>;
};

const Info: React.FC & Info = ({ children, ...restProps }) => {
  return (
    <Wrapper>
      {' '}
      <Container {...restProps}>{children}</Container>
    </Wrapper>
  );
};

const InfoGroup: React.FC = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};
Info.Group = InfoGroup;

const InfoText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Info.Text = InfoText;

const InfoHeading: React.FC = ({ children, ...restProps }) => {
  return <Heading {...restProps}>{children}</Heading>;
};
Info.Heading = InfoHeading;

const InfoTextLink: React.FC = ({ children, ...restProps }) => {
  return <TextLink {...restProps}>{children}</TextLink>;
};
Info.TextLink = InfoTextLink;

const InfoInput: React.FC<{ placeholder: string }> = ({
  placeholder,
  children,
  ...restProps
}) => {
  return (
    <Input placeholder={placeholder} {...restProps}>
      {children}
    </Input>
  );
};
Info.Input = InfoInput;

const InfoButton: React.FC = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};
Info.Button = InfoButton;

export default Info;
