import { POLICY_CONSTRAINTS } from "../action-types";

export interface PolicyData {
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

export interface Policy {
	policies?: Array<PolicyData>;
}

export interface PolicyState {
	items: Policy;
	loading: boolean;
	error: unknown;
}

interface RequestAction {
	type: POLICY_CONSTRAINTS.FETCH_POLICY_REQUEST;
}

interface SuccessAction {
	type: POLICY_CONSTRAINTS.FETCH_POLICY_SUCCESS;
	payload: Policy;
}

interface FailureAction {
	type: POLICY_CONSTRAINTS.FETCH_POLICY_FAILURE;
	error: unknown;
}

export type Action = RequestAction | SuccessAction | FailureAction;
