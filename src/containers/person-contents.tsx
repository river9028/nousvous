import React, { useRef, useState } from 'react';
import { Carousel, Project, Projects } from '../components';
import ProjectsInfo from '../fixtures/projects';

import { ProjectContext } from '../context';

type Item = {
  id: number;
  title: string;
  caption: string;
  thumb: string;
  slides: { type: string; src: string }[];
  'thumb-size': string;
  'background-color': string;
};

type PersonContentsProps<T> = {
  projects: T[keyof T];
};

const PersonContents: React.FC<PersonContentsProps<typeof ProjectsInfo>> = ({
  projects,
}) => {
  // 프로젝트의 표시 여부 상태
  const [showProject, setShowProject] = useState(false);
  // 현재 선택한 프로젝트의 정보를 담을 상태
  const [currentProject, setCurrentProject] = useState<null | Item>(null);

  // 프로젝트 화면에서의 컨텐츠 부분과 인포 부분의 height를 알기 위한 ref
  const contentsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  return (
    <ProjectContext.Provider
      value={{
        showProject,
        setShowProject,
        currentProject,
        setCurrentProject,
        infoRef,
        contentsRef,
      }}
    >
      <Projects>
        {projects.map((item: Item) => (
          <Projects.Card item={item} />
        ))}
      </Projects>

      {currentProject ? (
        <Project>
          <Project.Contents>
            <Carousel />

            <Project.Info />
            <Project.Close />
          </Project.Contents>
        </Project>
      ) : (
        <Project />
      )}
    </ProjectContext.Provider>
  );
};

export default PersonContents;
