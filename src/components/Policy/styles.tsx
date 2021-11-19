import styled from "styled-components";
import {
	primaryTextColor,
	secondaryTextColor,
	tertiaryTextColor,
	secondaryBackgroundColor,
	primaryButtonColor,
	secondaryButtonColor,
	tertiaryButtonColor,
	tertiaryColor,
} from "../../styles/theme";
import { secondaryFontFamily } from "../../styles/fonts";
import { breakpoints } from "../../styles/breakpoints";

interface IProps {
	isClicked: boolean;
}

const BoxShadow =
	"0px 25px 20px rgba(172, 168, 129, 0.2), 0px 10px 20px rgba(197, 202, 209, 0.56)";

export const StyledLink = styled.div<IProps>`
	display: flex;
	width: 100%;
	border-radius: 3px;
	background-color: ${secondaryBackgroundColor};
	transition: box-shadow 330ms ease-in-out;
	box-shadow: ${(props) => (props.isClicked ? BoxShadow : "none")};
`;

export const Card = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;

export const ArrowContainer = styled.div<IProps>`
	min-width: 40px;
	height: 40px;
	margin: 15px;
	text-align: center;
	line-height: 2.3;
	border-radius: 50%;
	border: 2px solid ${tertiaryButtonColor};
	background-color: ${(props) =>
		props.isClicked ? tertiaryButtonColor : "transparent"};
	@media only screen and (max-width: ${breakpoints.phone}) {
		display: none;
	}
`;

export const Arrow = styled.i<IProps>`
	border: 1px solid black;
	border-width: 0 3px 3px 0;
	display: inline-block;
	padding: 3px;
	transition: transform 330ms ease-in-out;
	transform: ${(props) =>
		props.isClicked ? "rotate(45deg)" : "rotate(-45deg)"};
	-webkit-transform: ${(props) =>
		props.isClicked ? "rotate(45deg)" : "rotate(-45deg)"};
`;

export const CardHeader = styled.div`
	display: flex;
	@media only screen and (max-width: ${breakpoints.tablet}) {
		align-items: center;
		margin: 0 5px;
		border-bottom: 1px solid ${tertiaryColor};
	}
	@media only screen and (max-width: ${breakpoints.phone}) {
		border-bottom: none;
		margin: 0;
	}
`;

export const CardDetails = styled.div`
	padding: 0 5px;
	margin: 5px;
	border-left: 1px solid ${tertiaryColor};
	@media only screen and (max-width: ${breakpoints.tablet}) {
		overflow-wrap: break-word;
		margin: 5px 0;
	}
	@media only screen and (max-width: ${breakpoints.phone}) {
		border-left: none;
	}
`;

export const CardContent = styled.div`
	display: flex;
	margin: 0 5px 10px 5px;
	border-top: 1px solid ${tertiaryColor};
	${CardDetails}:first-child {
		border-left: transparent;
	}
	${CardDetails}:not(:nth-child(2)) {
		@media only screen and (max-width: ${breakpoints.phone}) {
			display: none;
		}
	}
	@media only screen and (max-width: ${breakpoints.tablet}) {
		margin: 5px 5px 0;
		width: max-content;
		border-top: none;
	}
	@media only screen and (max-width: ${breakpoints.phone}) {
		width: 100%;
		justify-content: space-between;
		overflow: hidden;
		border-top: 1px solid ${tertiaryColor};
	}
`;

export const CardDetail = styled.div`
	display: flex;
	min-width: 220px;
	justify-content: space-between;
`;

export const ActiveStatus = styled.div`
	color: ${primaryButtonColor};
	&:after {
		content: "·";
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: ${primaryButtonColor};
		display: inline-block;
		line-height: 10px;
		margin-left: 5px;
	}
`;

export const ExpiredStatus = styled(ActiveStatus)`
	color: ${secondaryButtonColor};
	&:after {
		background: ${secondaryButtonColor};
	}
`;

export const Logo = styled.img`
	height: 100%;
	width: 100%;
	@media only screen and (max-width: ${breakpoints.desktop}) {
		height: 60px;
	}
`;

export const LogoContainer = styled.div`
	margin-left: auto;
	margin-right: 20px;
	align-self: center;
	@media only screen and (max-width: ${breakpoints.tablet}) {
		display: none;
	}
`;

export const SmallLogoContainer = styled.div`
	display: none;
	@media only screen and (max-width: ${breakpoints.phone}) {
		display: block;
		margin-right: 15px;
	}
`;

export const MiddleLogoContainer = styled.div`
	display: none;
	@media only screen and (max-width: ${breakpoints.tablet}) {
		display: block;
		margin-left: auto;
		margin-right: 5px;
		align-self: center;
	}
	@media only screen and (max-width: ${breakpoints.phone}) {
		display: none;
	}
`;

export const Title = styled.h2`
	color: ${primaryTextColor};
	font-size: 24px;
	margin: 5px 0 0 5px;
	@media only screen and (max-width: ${breakpoints.desktop}) {
		font-size: 20px;
	}
`;

export const TitleContainer = styled.div`
	@media only screen and (max-width: ${breakpoints.phone}) {
		margin: 0 5px;
	}
`;

export const SubTitle = styled.h3`
	display: inline-block;
	color: ${secondaryTextColor};
	font-family: ${secondaryFontFamily};
	font-size: 14px;
	font-weight: normal;
	margin: 0;
	padding: 0 5px;
`;

export const DetailTitle = styled.h4`
	color: ${tertiaryTextColor};
	font-family: ${secondaryFontFamily};
	font-size: 12px;
	font-weight: normal;
	margin: 0 5px;
	@media only screen and (max-width: ${breakpoints.phone}) {
		margin: 0 5px 0 0;
	}
`;

export const DetailContent = styled.p`
	color: ${primaryTextColor};
	font-size: 16px;
	margin: 0 5px;
	@media only screen and (max-width: ${breakpoints.phone}) {
		margin: 0 5px 0 0;
	}
`;
