import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html{
		box-sizing: border-box;
	}
	body {
    margin: 0;
    font-family: "Brandon",sans-serif;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    color: #000;
    font-size: 16px;
    line-height: 21px;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
	}
`;
