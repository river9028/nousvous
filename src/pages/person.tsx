import React from 'react';
import { useParams } from 'react-router';

import PersonInfo from '../fixtures/person-info';
import ProjectsInfo from '../fixtures/projects';

import { useInfiniteScroll } from '../hooks';
import { PersonContents, PersonHeader } from '../containers';

// 오브젝트의 타입의 키 값을 유니온 타입으로 만듦.
type PersonInfoType = keyof typeof PersonInfo;

type Params = {
  to: PersonInfoType;
};

type Item = {
  id: number;
  title: string;
  caption: string;
  thumb: string;
  slides: { type: string; src: string }[];
  'thumb-size': string;
  'background-color': string;
};

const Person = () => {
  // useParams를 이용해 URL parameter를 가져온다.
  const { to } = useParams<Params>()!;

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

  // PersonInfo 안에 to에 해당하는 값을 가져온다.
  const person = PersonInfo[to];

  // useInfiniteScroll를 이용해 ProjectsInfo 안에 to에 해당하는 값을 가져온다.
  // 현재는 together에 해당 하는 값만 존재해 그 값만 불러온다.
  // const projects = ProjectsInfo[to];
  const projects = useInfiniteScroll(ProjectsInfo.together);

  return (
    <>
      <PersonHeader person={person} />

      <PersonContents projects={projects} />
    </>
  );
};

export default Person;
