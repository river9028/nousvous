import React, { useContext } from 'react';
import { PressHeader } from '../components';
import * as ROUTES from '../constants/routes';
import PressContext from '../context/press';

const PressHeaderContainer = () => {
  const { setSection } = useContext(PressContext);
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
            }}
          >
            <PressHeader.Image
              src={`${process.env.REACT_APP_CDN_PUBLIC_URL}/images/logo/nvpress.svg`}
            />
          </PressHeader.Link>
        </PressHeader.Center>
        <PressHeader.Right>
          <PressHeader.Link handleLink={() => setSection('info')}>
            info
          </PressHeader.Link>
          &nbsp;•&nbsp;
          <PressHeader.Link>checkout ({0})</PressHeader.Link>
        </PressHeader.Right>
      </PressHeader>
    </>
  );
};

export default PressHeaderContainer;
