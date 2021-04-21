import React, { useState, useEffect } from 'react';
import { PressHeader, Products, StudioButton } from '../components';
import productsInfo from '../fixtures/products';
import sectionFilter from '../utils/section-filter';

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

const Press = () => {
  const products = sectionFilter(productsInfo as ProductType[]);

  return (
    <>
      <PressHeader>
        <PressHeader.Left>
          <div>independent publishers of</div>
          <div>
            <PressHeader.Link>records</PressHeader.Link>
            ,&nbsp;
            <PressHeader.Link>prints</PressHeader.Link>
            &nbsp;&&nbsp;
            <PressHeader.Link>books</PressHeader.Link>
          </div>
        </PressHeader.Left>
        <PressHeader.Center>
          <PressHeader.Link>
            <PressHeader.Image
              src={`${process.env.REACT_APP_CDN_PUBLIC_URL}/images/logo/nvpress.svg`}
            />
          </PressHeader.Link>
        </PressHeader.Center>
        <PressHeader.Right>
          <PressHeader.Link>info</PressHeader.Link>
          &nbsp;•&nbsp;
          <PressHeader.Link>checkout ({0})</PressHeader.Link>
        </PressHeader.Right>
      </PressHeader>

      <StudioButton>
        <StudioButton.Caption>nous vous studio</StudioButton.Caption>
        <StudioButton.Logo
          // src='images/logo/nvpress.svg'
          src='images/logo/nv-loading.gif'
        />
      </StudioButton>

      <Products>
        {products.book.data.concat(products.etc.data).map((item) => (
          <Products.Card item={item} />
        ))}
        {products.prints.data.map((item) => (
          <Products.Card item={item} />
        ))}
        {products.records.data.map((item) => (
          <Products.Card item={item} />
        ))}

        {/* <Products.Title>{products.records.title}</Products.Title> */}
      </Products>
    </>
  );
};

export default Press;
