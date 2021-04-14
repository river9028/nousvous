import React, { createContext } from 'react';

type Item = {
	id: number;
	title: string;
	caption: string;
	thumb: string;
	slides: string[];
	'thumb-size': string;
	'background-color': string;
};

type ProjectContext = {
	showProject: boolean;
	setShowProject: React.Dispatch<React.SetStateAction<boolean>>;
	currentProject: Item | null;
	setCurrentProject: React.Dispatch<React.SetStateAction<Item | null>>;
};

const ProjectContext = createContext<ProjectContext>({
	showProject: false,
	setShowProject: () => null,
	currentProject: null,
	setCurrentProject: () => null,
});

export default ProjectContext;
