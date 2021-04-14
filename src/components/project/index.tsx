import React, { useContext } from 'react';
import { ProjectContext } from '../../context';
import {
  Wrap,
  Container,
  Contents,
  Slider,
  Info,
  Title,
  Caption,
  Close,
} from './styles/project';

type Card = {
  item: {
    id: number;
    title: string;
    caption: string;
    thumb: string;
    slides: string[];
    'thumb-size': string;
    'background-color': string;
  };
};

type Project = {
  Contents: React.FC;
  Slider: React.FC;
  Info: React.FC;
  Close: React.FC;
};

const Project: React.FC & Project = ({ children, ...restProps }) => {
  const { showProject } = useContext(ProjectContext);
  return (
    <Wrap active={showProject} {...restProps}>
      <Container>{children}</Container>
    </Wrap>
  );
};

const ProjectContents: React.FC = ({ children, ...restProps }) => {
  return <Contents {...restProps}>{children}</Contents>;
};
Project.Contents = ProjectContents;

const ProjectSlider: React.FC = ({ children, ...restProps }) => {
  return <Slider {...restProps}>{children}</Slider>;
};
Project.Slider = ProjectSlider;

const ProjectInfo: React.FC = ({ children, ...restProps }) => {
  const { currentProject } = useContext(ProjectContext);

  if (currentProject === null) {
    return <></>;
  }

  return (
    <Info {...restProps}>
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
