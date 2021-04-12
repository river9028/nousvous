import React from 'react';
import { Popup, PressButton } from '../components';
import { HomeContainer } from '../containers';

const Main = () => {
  return (
    <>
      <PressButton>
        <PressButton.Caption>
          <b>Nous Vous Press</b>
          &nbsp; Books, prints & editions
        </PressButton.Caption>

        <PressButton.Logo src='/images/logo/nvpress.svg' />
      </PressButton>

      <HomeContainer />

      <Popup>
        <Popup.Close />
        <Popup.Text>
          Nous Vous is a collective of artists &amp; friends working together
          since 2007.
        </Popup.Text>
        <Popup.Text>
          Click on a name for individual portfolios. Select ‘Together’ to see
          collaborative projects. The tab on the left takes you to Nous Vous
          Press, where you can buy our books, prints and editions.
        </Popup.Text>
        <Popup.Text>
          Thanks!
          <br />
          Will, Nic &amp; Jay
        </Popup.Text>
      </Popup>
    </>
  );
};
export default Main;
