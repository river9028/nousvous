import React, { createContext } from 'react';

type BioContext = {
	showBio: boolean;
	setShowBio: React.Dispatch<React.SetStateAction<boolean>>;
};

const BioContext = createContext<BioContext>({
	showBio: false,
	setShowBio: () => null,
});

export default BioContext;
