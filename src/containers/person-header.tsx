import React, { useRef, useState } from 'react';
import { Bio, Header } from '../components';
import PersonInfo from '../fixtures/person-info';

import { BioContext } from '../context';

// Mapped Typed(맵드 타입)을 통해 PersonInfo의 타입안에 요소의 타입을 사용할 수 있도록 함.
type PersonHeaderProps<T> = {
  person: T[keyof T];
};

const PersonHeader: React.FC<PersonHeaderProps<typeof PersonInfo>> = ({
  person,
}) => {
  // 프로필 팝업이 나오는지 아닌지 확인하는 상태.
  const [showBio, setShowBio] = useState(true);

  return (
    <BioContext.Provider value={{ showBio, setShowBio }}>
      <Header>
        <Header.Back>Back</Header.Back>
        <Header.Profile>Bio</Header.Profile>
        {/* 해당하는 email, bio를 넘겨준다. */}
        <Header.Contact>{person.email}</Header.Contact>
      </Header>

      <Bio>
        <Bio.Close />
        <Bio.Text bio={person.bio} />
      </Bio>
    </BioContext.Provider>
  );
};

export default PersonHeader;
