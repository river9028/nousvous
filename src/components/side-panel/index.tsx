import React, { useContext } from 'react';
import { Container, Group, Close, TextLink } from './styles/side-panel';
import { SidePanelContext } from '../../context';

type SidePanel = {
  Group: React.FC;
  Close: React.FC;
  TextLink: React.FC;
};

const SidePanel: React.FC & SidePanel = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const SidePanelGroup: React.FC = ({ children, ...restProps }) => {
  const { showSidePanel } = useContext(SidePanelContext);
  return (
    <Group showSidePanel={showSidePanel} {...restProps}>
      {children}
    </Group>
  );
};
SidePanel.Group = SidePanelGroup;

const SidePanelClose: React.FC = ({ children, ...restProps }) => {
  const { setShowSidePanel } = useContext(SidePanelContext);

  return (
    <Close
      onClick={() => {
        console.log('close');
        setShowSidePanel(false);
      }}
      {...restProps}
    >
      {children}
    </Close>
  );
};
SidePanel.Close = SidePanelClose;

const SidePanelTextLink: React.FC = ({ children, ...restProps }) => {
  return <TextLink {...restProps}>{children}</TextLink>;
};
SidePanel.TextLink = SidePanelTextLink;

export default SidePanel;
