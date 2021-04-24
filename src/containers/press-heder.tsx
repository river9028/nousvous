import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { PressHeader } from '../components';
import PressContext from '../context/press';
import * as ROUTES from '../constants/routes';

const PressHeaderContainer = () => {
  const { section, setSection } = useContext(PressContext);
  const history = useHistory();

  return (
    <>
      <PressHeader>
        <PressHeader.Left>
          <div>independent publishers of</div>
          <div>
            <PressHeader.Link
              handleLink={() => {
                history.push(ROUTES.PRESS);
                setSection('record');
              }}
            >
              records
            </PressHeader.Link>
            ,&nbsp;
            <PressHeader.Link
              handleLink={() => {
                history.push(ROUTES.PRESS);
                setSection('print');
              }}
            >
              prints
            </PressHeader.Link>
            &nbsp;&&nbsp;
            <PressHeader.Link
              handleLink={() => {
                history.push(ROUTES.PRESS);
                setSection('book');
              }}
            >
              books
            </PressHeader.Link>
          </div>
        </PressHeader.Left>
        <PressHeader.Center>
          <PressHeader.Link
            handleLink={() => {
              history.push(ROUTES.PRESS);
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
