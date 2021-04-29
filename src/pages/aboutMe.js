import React, { useContext } from "react";
import { DataContext } from "../context";
import { Table } from "../components";
import { getAge } from "../helper";

const AboutMe = () => {
	const {
		dob,
		email,
		phone,
		address,
		residence,
		aboutMe_sub_heading,
		aboutMe_description,
	} = useContext(DataContext);

	return (
		<section id="about-me">
			<p className="heading-primary" children={"About me"} />
			<p className="heading-secondary heading-secondary-margin" children={aboutMe_sub_heading} />
			<p
				id="about-me-description"
				className="heading-tertiary"
				children={aboutMe_description}
			/>
			<Table
				noOfRows={3}
				data={[
					{ name: "Age", value: getAge(new Date(dob)) },
					{ name: "phone", value: phone },
					{ name: "email", value: email },
					{ name: "Residence", value: residence },
					{ name: "Address", value: address },
				]}
			/>
		</section>
	);
};

export default AboutMe;
