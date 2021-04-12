import React, { createContext, useContext, useState } from 'react';
import { Container, Close, Text } from './styles/popup';

type PopupContext = {
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

type Popup = {
  Close: React.FC;
  Text: React.FC;
};

const PopupContext = createContext<PopupContext>({
  close: false,
  setClose: () => null,
});

const Popup: React.FC & Popup = ({ children, ...restProps }) => {
  const [close, setClose] = useState(false);
  return (
    <PopupContext.Provider value={{ close, setClose }}>
      <Container close={close} {...restProps}>
        {children}
      </Container>
    </PopupContext.Provider>
  );
};

const PopupClose: React.FC = ({ children, ...restProps }) => {
  const { setClose } = useContext(PopupContext);
  return (
    <Close
      onClick={() => {
        console.log('close');
        setClose(true);
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
