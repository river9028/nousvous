import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	
	@font-face {
    font-family: 'Brandon Grotesque Regular';	//폰트를 사용할 때 부르는 이름 지정
    src: url('${process.env.PUBLIC_URL}/font/BrandonGrotesque-Regular.woff') format('woff');
    font-weight: 300; 		//폰트 기본 설정
    font-style: normal;
	}

	html{
		box-sizing: border-box;
	}
	body {
    margin: 0;
    font-family: "Brandon Grotesque Regular";
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
