import React, { useContext, useState } from 'react';
import { Products } from '../components';
import { StudioButton, PressHeader, Info } from '../containers';
import PressContext from '../context/press';

const Press = () => {
  const { products, section, setSection } = useContext(PressContext);

  if (products == null) {
    return <></>;
  }

  return (
    <>
      <PressHeader />

      <StudioButton />

      <Products>
        {section === '' &&
          (Object.keys(products) as Array<keyof typeof products>).map((key) => (
            <Products.CardGroup>
              {products[key].data.map((item) => (
                <Products.Card to={item.pname} item={item} />
              ))}
            </Products.CardGroup>
          ))}
        {section !== '' && section === 'info' ? (
          <Info />
        ) : (
          section !== '' &&
          products[section].data.map((item) => (
            <Products.Card to={item.pname} item={item} />
          ))
        )}
      </Products>
    </>
  );
};

export default Press;
