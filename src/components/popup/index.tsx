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
  // react-cookie를 이용해 팝업의 close 상태를 쿠키에 저장
  const [cookies, setCookie, removeCookie] = useCookies(['close']);

  useEffect(() => {
    // 쿠키에 close가 없으면
    if (!cookies.close) {
      // close의 상태를 false로 변경('팝업을 닫지 않음')
      setClose(false);
    } else {
      // 아니면, close의 상태를 ture(initial state)로 변경('팝업을 닫음')
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

  // 내일 날짜의 Date를 가져오기 위한 식
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  console.log(tomorrow);

  return (
    <Close
      onClick={() => {
        console.log('close');
        // 클로즈 버튼을 누르면 팝업을 닫고,
        setClose(true);
        // 쿠키 또한 새롭게 설정해 준다. setCookie('key', 'value', {option})
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
