import React, { createContext, useContext, useState } from 'react';
import * as dotenv from 'dotenv';
import {
  Container,
  Group,
  Background,
  Pane,
  Text,
  TextLink,
  Video,
} from './styles/home';
import * as ROUTES from '../../constants/routes';

dotenv.config();

// Home 컴포넌트에서 사용되는 컨텍스트 타입을 정의
type HomeContext = {
  showBackground: boolean;
  setShowBackground: React.Dispatch<React.SetStateAction<boolean>>;
};

// Home 컴포넌트 및 하위 컴포넌트의 타입을 정의
type Background = {
  src: string;
  isVideo?: boolean;
};

type TextLink = {
  to: string;
};

type Home = {
  Group: React.FC;
  Pane: React.FC;
  TextLink: React.FC<TextLink>;
  Background: React.FC<Background>;
};

// 위에 정의한 타입과 제네릭을 이용해 컨텍스트 생성.
// null-check를 하지 않기 위해, initial state를 정의해 주었다.
const HomeContext = createContext<HomeContext>({
  showBackground: false,
  setShowBackground: () => null,
});

// Home 컴포넌트. &(Intersection) 타입을 이용해 React.FC 뿐만 아니라 Home 타입도 구현할 수 있도록 했다.
const Home: React.FC & Home = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const HomeGroup: React.FC = ({ children, ...restProps }) => {
  // 배경화면을 opacity 값을 결정하는 상태
  const [showBackground, setShowBackground] = useState(false);
  return (
    // 컨텍스트를 이용해 하위 children에서 상태를 전달
    <HomeContext.Provider value={{ showBackground, setShowBackground }}>
      <Group {...restProps}>{children}</Group>
    </HomeContext.Provider>
  );
};
// Home 컴포넌트에 하위 컴포넌트 할당. 상위 컴포넌트를 가져와 하위 컴포넌트들를 조합해 페이지를 구성.
Home.Group = HomeGroup;

const HomePane: React.FC = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};
Home.Pane = HomePane;

// 컴포넌트의 props는 제네릭을 이용해 타입 지정.
// React.FC를 이용시 children은 기본 타입 할당.
const HomeTextLink: React.FC<TextLink> = ({ to, children, ...restProps }) => {
  // useContext를 통해 setShowBackground 가져와
  const { setShowBackground } = useContext(HomeContext);

  // 액션에 따라 상태를 바꿔준다.
  return (
    <Text
      onMouseEnter={() => {
        setShowBackground(true);
      }}
      onMouseLeave={() => {
        setShowBackground(false);
      }}
      {...restProps}
    >
      {/* path parameter를 통해 동적 라우팅 설정 */}
      <TextLink to={`${ROUTES.PERSON}/${to}`}>{children}</TextLink>
    </Text>
  );
};
Home.TextLink = HomeTextLink;

const HomeBackground: React.FC<Background> = ({
  src,
  isVideo,
  children,
  ...restProps
}) => {
  const { showBackground } = useContext(HomeContext);

  // 바뀐 상태를 전달
  return isVideo ? (
    <Background active={showBackground} backgroundColor='#ebd9c9'>
      <Video muted loop autoPlay playsInline>
        <source
          src={`${process.env.REACT_APP_CDN_PUBLIC_URL}/${src}`}
          type='video/mp4'
        />
      </Video>
    </Background>
  ) : (
    <Background
      active={showBackground}
      src={`${process.env.REACT_APP_CDN_PUBLIC_URL}/${src}`}
      {...restProps}
    >
      {children}
    </Background>
  );
};
Home.Background = HomeBackground;

export default Home;
