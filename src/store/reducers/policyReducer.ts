import { POLICY_CONSTRAINTS } from "../action-types";
import { Action, IPolicyState } from "../../interfaces/policy";

const initState = {
	items: {},
	loading: false,
	error: null,
};

const policyReducer = (
	state: IPolicyState = initState,
	action: Action
): IPolicyState => {
	switch (action.type) {
		case POLICY_CONSTRAINTS.FETCH_POLICY_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case POLICY_CONSTRAINTS.FETCH_POLICY_SUCCESS:
			return {
				...state,
				loading: false,
				items: action.payload,
			};
		case POLICY_CONSTRAINTS.FETCH_POLICY_FAILURE:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default policyReducer;
