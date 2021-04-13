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
import * as ROUTES from '../../constants/routes';

type HomeContext = {
  showBackground: boolean;
  setShowBackground: React.Dispatch<React.SetStateAction<boolean>>;
};

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

const HomeTextLink: React.FC<TextLink> = ({ to, children, ...restProps }) => {
  const { setShowBackground } = useContext(HomeContext);

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
