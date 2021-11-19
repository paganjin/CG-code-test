import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPolicies } from "../../store/action-creators";
import Policy from "../Policy/Policy";
import { State } from "../../store/reducers";
import { Header, List, ListItem, Info } from "./styles";

const Policies = () => {
	const dispatch = useDispatch();
	const data = useSelector((state: State) => state.policy);

	useEffect(() => {
		dispatch(fetchPolicies());
	}, []);

	const renderPolicies = () => {
		if (data.loading) {
			return <Info>Loading</Info>;
		}
		if (data.error) {
			return <Info>Unable to fetch policies</Info>;
		}
		if (data.items.policies) {
			return data.items.policies.map((policy) => {
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
