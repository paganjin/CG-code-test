import { createGlobalStyle } from "styled-components";
import { primaryFontFamily } from "../styles/fonts";
import { primaryBackgroundColor } from "../styles/theme"

const GlobalStyle = createGlobalStyle`
	html {
		height: 100%
	}
	body {
		height: 100%;
		font-family: ${primaryFontFamily};
		margin: 0;
		box-sizing: border-box;
		background-color: ${primaryBackgroundColor};
	}
`

export default GlobalStyle