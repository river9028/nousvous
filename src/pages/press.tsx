import React, { useState } from 'react';
import { Products } from '../components';
import productsInfo from '../fixtures/products';
import sectionFilter from '../utils/section-filter';
import { StudioButton, PressHeader, Info } from '../containers';
import PressContext from '../context/press';

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
  const [section, setSection] = useState<'' | 'info' | keyof typeof products>(
    '',
  );

  const products = sectionFilter(productsInfo as ProductType[]);

  return (
    <PressContext.Provider value={{ section, setSection }}>
      <PressHeader />

      <StudioButton />

      <Products>
        {section === '' &&
          (Object.keys(products) as Array<keyof typeof products>).map((key) => (
            <Products.CardGroup>
              {products[key].data.map((item) => (
                <Products.Card item={item} />
              ))}
            </Products.CardGroup>
          ))}
        {section !== '' && section === 'info' ? (
          <Info />
        ) : (
          section !== '' &&
          products[section].data.map((item) => <Products.Card item={item} />)
        )}
      </Products>
    </PressContext.Provider>
  );
};

export default Press;
