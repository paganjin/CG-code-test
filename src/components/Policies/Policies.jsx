import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolicies } from "../../store/action-creators";
import Policy from "../Policy/Policy";
import { Header, List, ListItem } from "./styles";

const Policies = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.policy);

	useEffect(() => {
		dispatch(fetchPolicies());
	}, []);

	const renderPolicies = () => {
		if (state.loading) {
			return <h1>Loading</h1>;
		}
		if (state.error) {
			return <h1>Unable to fetch policies</h1>;
		}
		if (state.items.policies) {
			return state.items.policies.map((policy) => {
				return (
					<ListItem key={policy.id}>
						<Policy policy={policy} />
					</ListItem>
				);
			});
		}
	};

	return (
		<List>
			<Header>YOUR POLICIES</Header>
			{renderPolicies()}
		</List>
	);
};

export default Policies;
