import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { PressHeader, Products, StudioButton } from '../components';
import productsInfo from '../fixtures/products';
import sectionFilter from '../utils/section-filter';
import * as ROUTES from '../constants/routes';

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
  const [section, setSection] = useState<'' | keyof typeof products>('');
  const history = useHistory();

  const products = sectionFilter(productsInfo as ProductType[]);

  return (
    <>
      <PressHeader>
        <PressHeader.Left>
          <div>independent publishers of</div>
          <div>
            <PressHeader.Link handleLink={() => setSection('record')}>
              records
            </PressHeader.Link>
            ,&nbsp;
            <PressHeader.Link handleLink={() => setSection('print')}>
              prints
            </PressHeader.Link>
            &nbsp;&&nbsp;
            <PressHeader.Link handleLink={() => setSection('book')}>
              books
            </PressHeader.Link>
          </div>
        </PressHeader.Left>
        <PressHeader.Center>
          <PressHeader.Link
            handleLink={() => {
              setSection('');
              history.push(ROUTES.PRESS);
            }}
          >
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

      {/* {products.records.data.map((item) => (
        <Products.Card item={item} />
      ))} */}

      <Products>
        {section === '' ? (
          (Object.keys(products) as Array<keyof typeof products>).map((key) => (
            <Products.CardGroup>
              {products[key].data.map((item) => (
                <Products.Card item={item} />
              ))}
            </Products.CardGroup>
          ))
        ) : (
          <>
            {/* <Products.Title>{products[section].title}</Products.Title> */}

            {products[section].data.map((item) => (
              <Products.Card item={item} />
            ))}
          </>
        )}
      </Products>
    </>
  );
};

export default Press;
