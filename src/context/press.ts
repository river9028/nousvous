import React, { createContext } from 'react';

type PressContext = {
	section: "" | "book" | "print" | "record" | "etc" | "info",
	setSection: React.Dispatch<React.SetStateAction<"" | "book" | "print" | "record" | "etc" | "info">>
};

const PressContext = createContext<PressContext>({
	section: '',
	setSection: () => null
});

export default PressContext;
