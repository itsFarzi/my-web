import React, { useContext } from "react";
import { PercentGrid } from "../components";
import { DataContext } from "../context";

const Skills = () => {
	const { skills_sub_heading, skills } = useContext(DataContext);

	return (
		<section id="skills">
			<p className="heading-primary" children={"Skills"} />
			<p className="heading-secondary heading-secondary-margin" children={skills_sub_heading} />
			<PercentGrid data={skills} />
		</section>
	);
};

export default Skills;
