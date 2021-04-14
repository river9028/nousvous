import React from 'react';
import {
  Container,
  Project,
  Group,
  Thumbnail,
  TitleWrap,
  Title,
} from './styles/projects';

type Project = {
  item: {
    id: number;
    title: string;
    subTitle: string;
    thumb: string;
    slides: string[];
    'thumb-size': string;
    'background-color': string;
  };
};

type Projects = {
  Project: React.FC<Project>;
};

const Projects: React.FC & Projects = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const ProjectsProject: React.FC<Project> = ({
  item,
  children,
  ...restProps
}) => {
  return (
    <Project
      thumbSize={item['thumb-size']! as 'small' | 'medium' | 'large'}
      {...restProps}
    >
      <Group>
        <Thumbnail src={`${process.env.PUBLIC_URL}/${item.thumb}`} />
        <TitleWrap backgroundColor={item['background-color']}>
          <Title>{item.title}</Title>
        </TitleWrap>
      </Group>
      {children}
    </Project>
  );
};
Projects.Project = ProjectsProject;

export default Projects;
