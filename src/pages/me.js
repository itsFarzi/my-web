import React, { useContext } from "react";
import { DataContext } from "../context";

const Me = () => {
	const { first_name, last_name, me_sub_heading, me_description } = useContext(
		DataContext,
	);

	return (
		<section id="me">
			<div id="me-name">
				<p className="heading-primary" children={first_name} />
				<p className="heading-primary" children={last_name} />
			</div>
			<p className="heading-secondary heading-secondary-margin" children={`${me_sub_heading} |`} />
			<p className="heading-tertiary" children={me_description} />
			<span className="button-primary button-primary-hover row-center">
				<p>contact me</p>
				<i className="fas fa-chevron-right" />
			</span>
		</section>
	);
};

export default Me;
