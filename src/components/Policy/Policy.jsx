import React from "react";
import {
	StyledLink,
	Card,
	CardHeader,
	CardContent,
	CardDetails,
	CardDetail,
	Status,
	ArrowContainer,
	Arrow,
	Logo,
	LogoContainer,
	TitleContainer,
	SubTitleContainer,
	Title,
	SubTitle,
	DetailTitle,
	DetailContent,
} from "./styles";

const Policy = ({ policy }) => {
	const months = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];

	const dateFormat = (date) => {
		let current_datetime = new Date(date);
		let formatted_date =
			current_datetime.getDate() +
			"-" +
			months[current_datetime.getMonth()] +
			"-" +
			current_datetime.getFullYear();
		return formatted_date;
	};

	return (
		<StyledLink>
			<Card>
				<CardHeader>
					<ArrowContainer>
						<Arrow />
					</ArrowContainer>
					<TitleContainer>
						<Title>{policy.title}</Title>
						<SubTitleContainer>
							<SubTitle>{policy.id}</SubTitle>
							<SubTitle>
								{policy.description ? policy.description : null}
							</SubTitle>
						</SubTitleContainer>
					</TitleContainer>
				</CardHeader>
				<CardContent>
					<CardDetails>
						<DetailContent>
							{dateFormat(policy.payment_date)}
						</DetailContent>
						<DetailTitle>Payment date</DetailTitle>
					</CardDetails>
					<CardDetails>
						<CardDetail>
							<DetailContent>
								{dateFormat(policy.coverage_start_date)}
							</DetailContent>
							{policy.coverage_end_date ? (
								<DetailContent>{` to ${dateFormat(
									policy.coverage_end_date
								)}`}</DetailContent>
							) : null}
						</CardDetail>
						<CardDetail>
							<DetailTitle>Coverage dates</DetailTitle>
							{policy.status === "active" ? (
								<Status primaryButtonColor>
									{policy.status.toUpperCase()}
								</Status>
							) : (
								<Status secondaryButtonColor>
									{policy.status.toUpperCase()}
								</Status>
							)}
						</CardDetail>
					</CardDetails>
					<CardDetails>
						<DetailContent>
							{policy.premium_formatted}
						</DetailContent>
						<DetailTitle>Price/Premium</DetailTitle>
					</CardDetails>
					{policy.renewal ? (
						<CardDetails>
							<DetailContent>
								{policy.renewal.charAt(0).toUpperCase() +
									policy.renewal.slice(1)}
							</DetailContent>
							<DetailTitle>Renewal</DetailTitle>
						</CardDetails>
					) : null}
				</CardContent>
			</Card>
			<LogoContainer>
				<Logo src={policy.partner.logo} />
			</LogoContainer>
		</StyledLink>
	);
};

export default Policy;
