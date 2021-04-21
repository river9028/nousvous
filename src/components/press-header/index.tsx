import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import {
  Container,
  Left,
  Center,
  Right,
  Link,
  Image,
} from './styles/press-header';

type PressHeader = {
  Left: React.FC;
  Center: React.FC;
  Right: React.FC;
  Link: React.FC<{ handleLink?: () => void }>;
  Image: React.FC<{ src: string }>;
};

const PressHeader: React.FC & PressHeader = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const PressHeaderLeft: React.FC = ({ children, ...restProps }) => {
  return <Left {...restProps}>{children}</Left>;
};
PressHeader.Left = PressHeaderLeft;

const PressHeaderCenter: React.FC = ({ children, ...restProps }) => {
  return <Center {...restProps}>{children}</Center>;
};
PressHeader.Center = PressHeaderCenter;

const PressHeaderRight: React.FC = ({ children, ...restProps }) => {
  return <Right {...restProps}>{children}</Right>;
};
PressHeader.Right = PressHeaderRight;

const PressHeaderLink: React.FC<{ handleLink?: () => void }> = ({
  handleLink,
  children,
  ...restProps
}) => {
  return (
    <Link onClick={handleLink} {...restProps}>
      {children}
    </Link>
  );
};
PressHeader.Link = PressHeaderLink;

const PressHeaderImage: React.FC<{ src: string }> = ({
  src,
  children,
  ...restProps
}) => {
  return (
    <Image src={src} {...restProps}>
      {children}
    </Image>
  );
};
PressHeader.Image = PressHeaderImage;

export default PressHeader;
