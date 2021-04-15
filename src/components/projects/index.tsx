import React, { useContext } from 'react';
import { ProjectContext } from '../../context';
import {
  Container,
  Card,
  Group,
  Thumbnail,
  TitleWrap,
  Title,
} from './styles/projects';

type Card = {
  item: {
    id: number;
    title: string;
    caption: string;
    thumb: string;
    slides: { type: string; src: string }[];
    'thumb-size': string;
    'background-color': string;
  };
};

type Projects = {
  Card: React.FC<Card>;
};

const Projects: React.FC & Projects = ({ children, ...restProps }) => {
  const { showProject } = useContext(ProjectContext);
  return (
    <Container active={showProject} {...restProps}>
      {children}
    </Container>
  );
};

const ProjectsCard: React.FC<Card> = ({ item, children, ...restProps }) => {
  const { setShowProject, setCurrentProject } = useContext(ProjectContext);
  return (
    <Card
      thumbSize={item['thumb-size']! as 'small' | 'medium' | 'large'}
      {...restProps}
    >
      <Group>
        <Thumbnail src={`${process.env.PUBLIC_URL}/${item.thumb}`} />
        <TitleWrap
          href=''
          onClick={(e) => {
            document.body.style.overflow = 'hidden';
            e.preventDefault();
            setCurrentProject(item);
            setShowProject(true);
          }}
          backgroundColor={item['background-color']}
        >
          <Title>{item.title}</Title>
        </TitleWrap>
      </Group>
      {children}
    </Card>
  );
};
Projects.Card = ProjectsCard;

export default Projects;
