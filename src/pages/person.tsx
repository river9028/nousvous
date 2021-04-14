import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Bio, Header, Project, Projects } from '../components';
import PersonInfo from '../fixtures/person-info';
import ProjectsInfo from '../fixtures/projects';
import { BioContext, ProjectContext } from '../context';

type Params = {
  to: string;
};

type Item = {
  id: number;
  title: string;
  caption: string;
  thumb: string;
  slides: string[];
  'thumb-size': string;
  'background-color': string;
};

const Person = () => {
  const { to } = useParams<Params>()!;
  const [currentProject, setCurrentProject] = useState<null | Item>(null);
  const [showBio, setShowBio] = useState(true);
  const [showProject, setShowProject] = useState(false);

  console.log(
    `${to
      .split(' ')
      .map((str) => `${str[0].toUpperCase() + str.slice(1)} `)}Page`,
  );

  /*   type PersonInfoType =
    | 'together'
    | 'jay cover'
    | 'nicolas burrows'
    | 'william luz'; */

  type PersonInfoType = keyof typeof PersonInfo;

  const person = PersonInfo[to! as PersonInfoType];
  // const projects = ProjectsInfo[to! as PersonInfoType];
  const projects = ProjectsInfo.together;

  return (
    <>
      <BioContext.Provider value={{ showBio, setShowBio }}>
        <Header>
          <Header.Back>Back</Header.Back>
          <Header.Profile>Bio</Header.Profile>
          <Header.Contact>{person.email}</Header.Contact>
        </Header>

        <Bio>
          <Bio.Close />
          <Bio.Text bio={person.bio} />
        </Bio>
      </BioContext.Provider>

      <ProjectContext.Provider
        value={{
          showProject,
          setShowProject,
          currentProject,
          setCurrentProject,
        }}
      >
        <Projects>
          {projects.map((item: Item) => (
            <Projects.Card item={item} />
          ))}
        </Projects>

        {currentProject && (
          <Project>
            <Project.Contents>
              <Project.Slider />
              <Project.Info />
              <Project.Close />
            </Project.Contents>
          </Project>
        )}
      </ProjectContext.Provider>
    </>
  );
};

export default Person;
