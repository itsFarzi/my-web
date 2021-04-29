import React, { useContext, useRef } from "react";
import { Controller } from "../components/dataCalender";
import { DataCalender } from "../components";
import { DataContext } from "../context";

const Experience = () => {
	const { experiences, experience_sub_heading } = useContext(DataContext);
	const dataCalenderRef = useRef();

	return (
		<section id="experience">
			<div className="row-center-spaceBetween">
				<div>
					<p
						children={"Experience"}
						className="heading-primary"
						onClick={() => dataCalenderRef.current.next()}
					/>
					<p
						className="heading-secondary heading-secondary-margin"
						children={experience_sub_heading}
						onClick={() => dataCalenderRef.current.previous()}
					/>
				</div>
				<Controller dataCalenderRef={dataCalenderRef} />
			</div>
			<DataCalender ref={dataCalenderRef} data={experiences} />
		</section>
	);
};

export default Experience;
