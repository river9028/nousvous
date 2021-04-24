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
import * as ROUTES from '../../constants/routes';

dotenv.config();

type ProductType = {
  name: string;
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
  to: string;
};

type Products = {
  Card: React.FC<Card>;
  Title: React.FC;
  CardGroup: React.FC;
};

const Products: React.FC & Products = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const ProductsTitle: React.FC = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Products.Title = ProductsTitle;

const ProductsCardGroup: React.FC = ({ children, ...restProps }) => {
  return <CardGroup {...restProps}>{children}</CardGroup>;
};
Products.CardGroup = ProductsCardGroup;

const ProductsCard: React.FC<Card> = ({ to, item, children, ...restProps }) => {
  return (
    <Card to={`${ROUTES.PRODUCT}/${to}`} {...restProps}>
      <Group>
        <Thumbnail src={`${process.env.PUBLIC_URL}/${item['img-url']}`} />
        <Text>{item.name}</Text>
        {item.stock !== 0 ? (
          <Text>£ {item.price}</Text>
        ) : (
          <Text style={{ color: '#e85242' }}>Sold Out</Text>
        )}
      </Group>
      {children}
    </Card>
  );
};
Products.Card = ProductsCard;

export default Products;
