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

export const StyledLink = styled.div`
	display: flex;
	width: 100%;
	border-radius: 3px;
	background-color: ${secondaryBackgroundColor};
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ArrowContainer = styled.div`
	width: 40px;
	height: 40px;
	margin: 15px;
	text-align: center;
	line-height: 2.3;
	border-radius: 50%;
	border: 2px solid ${tertiaryButtonColor};
`;

export const Arrow = styled.i`
	border: 1px solid black;
	border-width: 0 3px 3px 0;
	display: inline-block;
	padding: 3px;
	transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
`;

export const CardHeader = styled.div`
	display: flex;
`;

export const CardDetails = styled.div`
	padding: 0 5px;
	margin: 5px;
	border-left: 1px solid ${tertiaryColor};
`;

export const CardContent = styled.div`
	display: flex;
	margin: 10px 0;
	${CardDetails}:first-child {
		border-left: transparent;
	}
`;

export const CardDetail = styled.div`
	display: flex;
	width: max-content;
`;

export const Status = styled.div`
	color: ${(props) =>
		props.primaryButtonColor ? primaryButtonColor : secondaryButtonColor};
	&:after {
		content: "·";
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: ${(props) =>
			props.primaryButtonColor
				? primaryButtonColor
				: secondaryButtonColor};
		display: inline-block;
		line-height: 10px;
		margin-left: 5px;
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
	@media only screen and (max-width: ${breakpoints.desktop}) {
		margin-top: 10px;
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

export const TitleContainer = styled.div``;

export const SubTitle = styled.h3`
	display: inline-block;
	color: ${secondaryTextColor};
	font-family: ${secondaryFontFamily};
	border-left: 1px solid ${secondaryTextColor};
	font-size: 14px;
	font-weight: normal;
	margin: 0;
	padding: 0 5px;
`;

export const SubTitleContainer = styled.div`
	${SubTitle}:first-child {
		border-left: transparent;
	}
`;

export const DetailTitle = styled.h4`
	color: ${tertiaryTextColor};
	font-family: ${secondaryFontFamily};
	font-size: 12px;
	font-weight: normal;
	margin: 0 5px;
`;

export const DetailContent = styled.p`
	color: ${primaryTextColor};
	font-size: 16px;
	margin: 0 5px;
`;
