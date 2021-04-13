import React, { useContext } from 'react';
import { Container, Group, Close, TextLink } from './styles/side-panel';
import { SidePanelContext } from '../../context';

type SidePanel = {
  Group: React.FC;
  Close: React.FC;
  TextLink: React.FC<{ href: string }>;
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

const SidePanelTextLink: React.FC<{ href: string }> = ({
  href,
  children,
  ...restProps
}) => {
  return (
    // 새 탭에서 뜰 수 있도록 target='_blank' 추가
    <TextLink href={href} target='_blank' {...restProps}>
      {children}
    </TextLink>
  );
};
SidePanel.TextLink = SidePanelTextLink;

export default SidePanel;
