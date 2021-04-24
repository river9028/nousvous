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
} from './styles/product';

type Product = {
  Group: React.FC;
  Text: React.FC;
  Heading: React.FC;
  TextLink: React.FC;
  Button: React.FC;
  Input: React.FC<{ placeholder: string }>;
};

const Product: React.FC & Product = ({ children, ...restProps }) => {
  return (
    <Wrapper>
      <Container {...restProps}>{children}</Container>
    </Wrapper>
  );
};

const ProductGroup: React.FC = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};
Product.Group = ProductGroup;

const ProductText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Product.Text = ProductText;

const ProductHeading: React.FC = ({ children, ...restProps }) => {
  return <Heading {...restProps}>{children}</Heading>;
};
Product.Heading = ProductHeading;

const ProductTextLink: React.FC = ({ children, ...restProps }) => {
  return <TextLink {...restProps}>{children}</TextLink>;
};
Product.TextLink = ProductTextLink;

const ProductInput: React.FC<{ placeholder: string }> = ({
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
Product.Input = ProductInput;

const ProductButton: React.FC = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};
Product.Button = ProductButton;

export default Product;
