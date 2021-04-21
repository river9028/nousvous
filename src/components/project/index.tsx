import React, { useContext } from 'react';
import { ProjectContext } from '../../context';
import { useElementSize } from '../../hooks';
import {
  Wrap,
  Container,
  Contents,
  Info,
  Title,
  Caption,
  Close,
} from './styles/project';

type Project = {
  Contents: React.FC;
  Info: React.FC;
  Close: React.FC;
};

const Project: React.FC & Project = ({ children, ...restProps }) => {
  const { contentsRef, showProject } = useContext(ProjectContext);
  return (
    <Wrap active={showProject} {...restProps}>
      <Container ref={contentsRef}>{children}</Container>
    </Wrap>
  );
};

const ProjectContents: React.FC = ({ children, ...restProps }) => {
  const { contentsRef, infoRef } = useContext(ProjectContext);
  const size = useElementSize(infoRef);

  return (
    <Contents
      contentSize={contentsRef.current?.clientHeight as number}
      infoSize={size.height as number}
      {...restProps}
    >
      {children}
    </Contents>
  );
};
Project.Contents = ProjectContents;

const ProjectInfo: React.FC = ({ children, ...restProps }) => {
  const { infoRef, currentProject } = useContext(ProjectContext);

  if (currentProject === null) {
    return <></>;
  }

  return (
    <Info ref={infoRef} {...restProps}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <Title>{currentProject.title}</Title>
        <Caption dangerouslySetInnerHTML={{ __html: currentProject.caption }} />
      </div>
    </Info>
  );
};
Project.Info = ProjectInfo;

const ProjectClose: React.FC = ({ children, ...restProps }) => {
  const { setShowProject, setCurrentProject } = useContext(ProjectContext);
  return (
    <Close
      onClick={(e) => {
        document.body.style.overflow = 'auto';
        e.preventDefault();
        setCurrentProject(null);
        setShowProject(false);
      }}
      {...restProps}
    />
  );
};
Project.Close = ProjectClose;

export default Project;
