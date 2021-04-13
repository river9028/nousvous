import React, { useContext } from 'react';
import { BioContext } from '../../context';
import { Container, Close, Text } from './styles/bio';

type Bio = {
  Close: React.FC;
  Text: React.FC<{ bio: string }>;
};

const Bio: React.FC & Bio = ({ children, ...restProps }) => {
  const { showBio } = useContext(BioContext);
  return (
    <Container close={showBio} {...restProps}>
      {children}
    </Container>
  );
};

const BioClose: React.FC = ({ children, ...restProps }) => {
  const { setShowBio } = useContext(BioContext);
  return (
    <Close
      onClick={() => {
        console.log('close');
        setShowBio(true);
      }}
      {...restProps}
    >
      {children}
    </Close>
  );
};
Bio.Close = BioClose;

const BioText: React.FC<{ bio: string }> = ({
  bio,
  children,
  ...restProps
}) => {
  return (
    <Text dangerouslySetInnerHTML={{ __html: bio }} {...restProps}>
      {children}
    </Text>
  );
};
Bio.Text = BioText;

export default Bio;
