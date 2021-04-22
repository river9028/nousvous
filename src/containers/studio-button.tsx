import React from 'react';
import { StudioButton } from '../components';

const StudioButtonContainer = () => {
  return (
    <>
      <StudioButton>
        <StudioButton.Caption>nous vous studio</StudioButton.Caption>
        <StudioButton.Logo
          // src='images/logo/nvpress.svg'
          src='images/logo/nv-loading.gif'
        />
      </StudioButton>
    </>
  );
};

export default StudioButtonContainer;
