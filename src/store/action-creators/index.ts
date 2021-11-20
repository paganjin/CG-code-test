import Axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../../interfaces/policy";
import { POLICY_CONSTRAINTS } from "../action-types";

export const fetchPolicies = () => async (dispatch: Dispatch<Action>) => {
	dispatch({
		type: POLICY_CONSTRAINTS.FETCH_POLICY_REQUEST,
	});
	try {
		const response = await Axios.get(
			"https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking"
		);
		dispatch({
			type: POLICY_CONSTRAINTS.FETCH_POLICY_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: POLICY_CONSTRAINTS.FETCH_POLICY_FAILURE,
			error,
		});
	}
};
