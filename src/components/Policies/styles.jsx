import styled from "styled-components";
import { primaryTextColor } from "../../styles/theme";
import { breakpoints } from "../../styles/breakpoints";

export const Header = styled.h1`
	color: ${primaryTextColor};
	margin: 30px 0;
	font-size: 32px;
`;

export const List = styled.ul`
	display: block;
	margin: 0 auto;
	padding: 0 20px;
	list-style-type: none;
	box-sizing: border-box;
	@media only screen and (min-width: ${breakpoints.phone}) {
		max-width: ${breakpoints.phone};
	}
	@media only screen and (min-width: ${breakpoints.tablet}) {
		max-width: ${breakpoints.tablet};
	}
	@media only screen and (min-width: ${breakpoints.desktop}) {
		max-width: ${breakpoints.desktop};
	}
`;

export const Info = styled.h2`
	text-align: center;
`;

export const ListItem = styled.li`
	margin-bottom: 40px;
`;
