import React, { createContext } from 'react';

type Item = {
	id: number;
	title: string;
	caption: string;
	thumb: string;
	slides: { type: string; src: string }[];
	'thumb-size': string;
	'background-color': string;
};

type ProjectContext = {
	showProject: boolean;
	setShowProject: React.Dispatch<React.SetStateAction<boolean>>;
	currentProject: Item | null;
	setCurrentProject: React.Dispatch<React.SetStateAction<Item | null>>;
	infoRef: React.MutableRefObject<HTMLDivElement | null>
	contentsRef: React.MutableRefObject<HTMLDivElement | null>
};

const ProjectContext = createContext<ProjectContext>({
	showProject: false,
	setShowProject: () => null,
	currentProject: null,
	setCurrentProject: () => null,
	infoRef: { current: null },
	contentsRef: { current: null },
});

export default ProjectContext;
