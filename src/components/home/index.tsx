import React, { createContext, useContext, useState } from 'react';
import {
  Container,
  Group,
  Background,
  Pane,
  Text,
  TextLink,
  Video,
} from './styles/home';

type HomeContext = {
  showBackground: boolean;
  setShowBackground: React.Dispatch<React.SetStateAction<boolean>>;
};

type Background = {
  src: string;
  isVideo?: boolean;
};

type Home = {
  Group: React.FC;
  Pane: React.FC;
  TextLink: React.FC;
  Background: React.FC<Background>;
};

const HomeContext = createContext<HomeContext>({
  showBackground: false,
  setShowBackground: () => null,
});

const Home: React.FC & Home = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const HomeGroup: React.FC = ({ children, ...restProps }) => {
  const [showBackground, setShowBackground] = useState(false);
  return (
    <HomeContext.Provider value={{ showBackground, setShowBackground }}>
      <Group {...restProps}>{children}</Group>
    </HomeContext.Provider>
  );
};
Home.Group = HomeGroup;

const HomePane: React.FC = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};
Home.Pane = HomePane;

const HomeTextLink: React.FC = ({ children, ...restProps }) => {
  const { setShowBackground } = useContext(HomeContext);

  return (
    <Text
      onMouseEnter={() => {
        // 해당 배경화면의 CSS opacity: 1로 추가
        console.log('enter');
        setShowBackground(true);
      }}
      onMouseLeave={() => {
        // 해당 배경화면의 CSS opacity: 0으로 다시 변경
        console.log('leave');
        setShowBackground(false);
      }}
      {...restProps}
    >
      <TextLink>{children}</TextLink>
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

  return isVideo ? (
    <Background active={showBackground} backgroundColor='#ebd9c9'>
      <Video muted loop autoPlay>
        <source src={src} type='video/mp4' />
      </Video>
    </Background>
  ) : (
    <Background active={showBackground} src={src} {...restProps}>
      {children}
    </Background>
  );
};
Home.Background = HomeBackground;

export default Home;
