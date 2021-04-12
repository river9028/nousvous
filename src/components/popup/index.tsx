import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';
import { Container, Close, Text } from './styles/popup';

type PopupContext = {
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  setCookie: (
    name: string,
    value: any,
    options?: CookieSetOptions | undefined,
  ) => void;
};

type Popup = {
  Close: React.FC;
  Text: React.FC;
};

const PopupContext = createContext<PopupContext>({
  close: true,
  setClose: () => null,
  setCookie: (
    name: string,
    value: any,
    options?: CookieSetOptions | undefined,
  ) => null,
});

const Popup: React.FC & Popup = ({ children, ...restProps }) => {
  const [close, setClose] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(['close']);

  useEffect(() => {
    if (!cookies.close) {
      setClose(false);
    } else {
      setClose(true);
    }
  }, [cookies, cookies.close, setCookie]);

  return (
    <PopupContext.Provider value={{ close, setClose, setCookie }}>
      <Container close={close} {...restProps}>
        {children}
      </Container>
    </PopupContext.Provider>
  );
};

const PopupClose: React.FC = ({ children, ...restProps }) => {
  const { setClose, setCookie } = useContext(PopupContext);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  console.log(tomorrow);

  return (
    <Close
      onClick={() => {
        console.log('close');
        setClose(true);
        setCookie('close', true, {
          expires: tomorrow,
          // maxAge: 5,
        });
      }}
      {...restProps}
    >
      {children}
    </Close>
  );
};
Popup.Close = PopupClose;

const PopupText: React.FC = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};
Popup.Text = PopupText;

export default Popup;
