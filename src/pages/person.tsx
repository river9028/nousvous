import { type } from 'node:os';
import React from 'react';
import { useParams } from 'react-router';
import Header from '../components/header';
import PersonInfo from '../fixtures/person-info';

type Params = {
  to: string;
};

const Person = () => {
  const { to } = useParams<Params>()!;

  console.log(
    `${to
      .split('-')
      .map((str) => `${str[0].toUpperCase() + str.slice(1)} `)}Page`,
  );

  /*   type PersonInfoType =
    | 'together'
    | 'jay cover'
    | 'nicolas burrows'
    | 'william luz'; */

  type PersonInfoType = keyof typeof PersonInfo;

  const person = PersonInfo[to.replaceAll('-', ' ')! as PersonInfoType];

  return (
    <>
      <Header>
        <Header.Back>Back</Header.Back>
        <Header.Profile>Bio</Header.Profile>
        <Header.Contact>{person.email}</Header.Contact>
      </Header>
    </>
  );
};

export default Person;
