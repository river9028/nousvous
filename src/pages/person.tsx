import { type } from 'node:os';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Bio, Header } from '../components';
import PersonInfo from '../fixtures/person-info';
import { BioContext } from '../context';

type Params = {
  to: string;
};

const Person = () => {
  const { to } = useParams<Params>()!;
  const [showBio, setShowBio] = useState(true);

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
  );
};

export default Person;
