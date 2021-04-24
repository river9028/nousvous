import React from 'react';
import { useParams } from 'react-router';
import { ProductContents, PressHeader, StudioButton } from '../containers';

const Product = () => {
  const { pname } = useParams<{ pname: string }>()!;
  console.log(pname);

  return (
    <>
      <PressHeader />
      <StudioButton />

      <ProductContents />
    </>
  );
};

export default Product;
