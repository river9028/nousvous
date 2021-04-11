import React, { FunctionComponent } from 'react';
import { Container, Footer } from './styles/home';

type Props = {
  children: React.ReactNode;
};

export default function Home({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}
