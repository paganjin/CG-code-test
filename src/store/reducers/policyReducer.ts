import { POLICY_CONSTRAINTS } from "../action-types";
import { Action, PolicyState } from "../actions";

const initState = {
	items: {},
	loading: false,
	error: null,
};

const policyReducer = (
	state: PolicyState = initState,
	action: Action
): PolicyState => {
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
