import React from 'react';
import { useParams } from 'react-router';

const Product = () => {
  const { to } = useParams<{ to: string }>()!;

  return <div>Product Page</div>;
};

export default Product;
