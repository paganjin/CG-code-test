import { POLICY_CONSTRAINTS } from "../store/action-types";

export interface IPolicyData {
	id: string;
	type: string;
	title: string;
	description: string;
	status: string;
	premium: number;
	premium_formatted: string;
	payment_date: string;
	coverage_start_date: string;
	coverage_end_date?: string;
	renewal?: string;
	partner: {
		id: string;
		name: string;
		logo: string;
	};
}

export interface IPolicy {
	policies?: Array<IPolicyData>;
}

export interface IPolicyState {
	items: IPolicy;
	loading: boolean;
	error: unknown;
}

interface RequestAction {
	type: POLICY_CONSTRAINTS.FETCH_POLICY_REQUEST;
}

interface SuccessAction {
	type: POLICY_CONSTRAINTS.FETCH_POLICY_SUCCESS;
	payload: IPolicy;
}

interface FailureAction {
	type: POLICY_CONSTRAINTS.FETCH_POLICY_FAILURE;
	error: unknown;
}

export type Action = RequestAction | SuccessAction | FailureAction;
