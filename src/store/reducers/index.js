import { combineReducers } from 'redux';
import policyReducer from './policyReducer'

const reducers = combineReducers({
	policy: policyReducer
})

export default reducers