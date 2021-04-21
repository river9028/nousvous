import React from 'react';
import * as dotenv from 'dotenv';
import {
  Container,
  Card,
  Group,
  Thumbnail,
  Title,
  Text,
  CardGroup,
} from './styles/products';

dotenv.config();

type ProductType = {
  id: 1;
  section: string;
  pname: string;
  price: number;
  'shipping-charge': { UK: number; Europe: number; Worldwide: number };
  description: string;
  'img-url': string;
  stock: number;
};

type Card = {
  item: ProductType;
};

type Products = {
  Card: React.FC<Card>;
  Title: React.FC;
  CardGroup: React.FC;
};

const Products: React.FC & Products = ({ children, ...restProps }) => {
  return (
    <Container active={false} {...restProps}>
      {children}
    </Container>
  );
};

const ProductsTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Products.Title = ProductsTitle;

const ProductsCardGroup: React.FC = ({ children, ...restProps }) => {
  return <CardGroup {...restProps}>{children}</CardGroup>;
};
Products.CardGroup = ProductsCardGroup;

const ProductsCard: React.FC<Card> = ({ item, children, ...restProps }) => {
  return (
    <Card {...restProps}>
      <Group>
        <Thumbnail src={`${process.env.PUBLIC_URL}/${item['img-url']}`} />
        <Text>{item.pname}</Text>
        <Text>£ {item.price}</Text>
      </Group>
      {children}
    </Card>
  );
};
Products.Card = ProductsCard;

export default Products;
