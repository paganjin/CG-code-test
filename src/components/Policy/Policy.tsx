import React, { useState, FC } from "react";
import {
	StyledLink,
	Card,
	CardHeader,
	CardContent,
	CardDetails,
	CardDetail,
	ActiveStatus,
	ExpiredStatus,
	ArrowContainer,
	Arrow,
	Logo,
	LogoContainer,
	TitleContainer,
	SmallLogoContainer,
	MiddleLogoContainer,
	Title,
	SubTitle,
	DetailTitle,
	DetailContent,
} from "./styles";
import { months, POLICY_STATUS } from "./utils/policyConstants";
import { PolicyData } from "../../store/actions";

interface Props {
	policy: PolicyData;
}

const Policy: FC<Props> = ({ policy }) => {
	const [isClicked, setIsClicked] = useState<boolean>(false);

	const handleClick = (): void => {
		setIsClicked(!isClicked);
	};

	const dateFormat = (date: string) => {
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
		<StyledLink onClick={handleClick} isClicked={isClicked}>
			<Card>
				<CardHeader>
					<ArrowContainer isClicked={isClicked}>
						<Arrow isClicked={isClicked} />
					</ArrowContainer>
					<TitleContainer>
						<Title>{policy.title}</Title>
						<SubTitle>{`${policy.id} | ${
							policy.description ? policy.description : null
						}`}</SubTitle>
					</TitleContainer>
					<MiddleLogoContainer>
						<Logo src={policy.partner.logo} />
					</MiddleLogoContainer>
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
							{policy.status === POLICY_STATUS.ACTIVE ? (
								<ActiveStatus>
									{policy.status.toUpperCase()}
								</ActiveStatus>
							) : (
								<ExpiredStatus>
									{policy.status.toUpperCase()}
								</ExpiredStatus>
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
					<SmallLogoContainer>
						<Logo src={policy.partner.logo} />
					</SmallLogoContainer>
				</CardContent>
			</Card>
			<LogoContainer>
				<Logo src={policy.partner.logo} />
			</LogoContainer>
		</StyledLink>
	);
};

export default Policy;
