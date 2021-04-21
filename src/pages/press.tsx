import React, { useState, useEffect } from 'react';
import { PressHeader, StudioButton } from '../components';

const Press = () => {
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

      <div>Studio Button</div>
      <StudioButton>
        <StudioButton.Caption>nous vous studio</StudioButton.Caption>
        <StudioButton.Logo
          // src='images/logo/nvpress.svg'
          src='images/logo/nv-loading.gif'
        />
      </StudioButton>

      {/* <div>Products</div> */}
    </>
  );
};

export default Press;
