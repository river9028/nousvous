import React, { createContext } from 'react';

type SidePanelContext = {
	showSidePanel: boolean;
	setShowSidePanel: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidePanelContext = createContext<SidePanelContext>({
	showSidePanel: false,
	setShowSidePanel: () => null,
});

export default SidePanelContext;
