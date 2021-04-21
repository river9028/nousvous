import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import * as dotenv from 'dotenv';
import { Container, Caption, Logo, Image } from './styles/studio-button';
// 전역상수로 이용할 경로를 저장해 놓은 routes 파일을 가져와 'ROUTES'라는 이름으로 이용
import * as ROUTES from '../../constants/routes';

dotenv.config();

type Logo = {
  src: string;
};

type StudioButton = {
  Caption: React.FC;
  Logo: React.FC<Logo>;
};

const StudioButtonContext = createContext({ showLoading: false });

const StudioButton: React.FC & StudioButton = ({ children, ...restProps }) => {
  const history = useHistory();
  // 메인 화면 검정색 왼쪽바 클릭시, 페이지 전환 효과를 생성할 상태.
  const [showLoading, setShowLoading] = useState(false);
  return (
    <StudioButtonContext.Provider value={{ showLoading }}>
      <Container
        showLoading={showLoading}
        onClick={() => {
          console.log('clicked');
          setShowLoading(true);

          setTimeout(() => {
            // 이동할 수 있도록 history 객체의 push를 이용해 ROUTES.PRESS 이동
            history.push(ROUTES.MAIN);
            // 단, 로딩 화면이 2초간 표시된 이후에 실행
          }, 3000);
        }}
        {...restProps}
      >
        {children}
      </Container>
    </StudioButtonContext.Provider>
  );
};

const StudioButtonCaption: React.FC = ({ children, ...restProps }) => {
  return <Caption {...restProps}>{children}</Caption>;
};
StudioButton.Caption = StudioButtonCaption;

const StudioButtonLogo: React.FC<Logo> = ({ src, children, ...restProps }) => {
  const { showLoading } = useContext(StudioButtonContext);
  return (
    <Logo {...restProps}>
      <Image
        showLoading={showLoading}
        src={`${process.env.REACT_APP_CDN_PUBLIC_URL}/${src}`}
      />
    </Logo>
  );
};
StudioButton.Logo = StudioButtonLogo;

export default StudioButton;
