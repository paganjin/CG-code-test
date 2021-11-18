import Axios from 'axios'

export const fetchPolicies = () => async (dispatch, getState) => {
	dispatch({
		type: 'FETCH_POSTS_REQUEST'
	})
	try {
		const response = await Axios.get("https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking")
		dispatch({
			type: 'FETCH_POSTS_SUCCESS',
			payload: response.data
		})
	} catch (error) {
		dispatch({
			type: 'FETCH_POSTS_FAILURE',
			error
		})
	}
}
