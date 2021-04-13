import { type } from 'node:os';
import React from 'react';
import { useParams } from 'react-router';

type Params = {
  to: string;
};

const Person = () => {
  const { to } = useParams<Params>()!;
  console.log(to);

  return (
    <div>
      {to.split('-').map((str) => `${str[0].toUpperCase() + str.slice(1)} `)}
      Page
    </div>
  );
};

export default Person;
