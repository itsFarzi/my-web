import React, { useContext, useRef } from "react";
import { Controller } from "../components/dataCalender";
import { DataCalender } from "../components";
import { DataContext } from "../context";

const Education = () => {
	const { education, education_sub_heading } = useContext(DataContext);
	const dataCalenderRef = useRef();

	return (
		<section id="education">
			<div className="row-center-spaceBetween">
				<div>
					<p
						children={"Education"}
						className="heading-primary"
						onClick={() => dataCalenderRef.current.next()}
					/>
					<p
						className="heading-secondary heading-secondary-margin"
						children={education_sub_heading}
						onClick={() => dataCalenderRef.current.previous()}
					/>
				</div>
				<Controller dataCalenderRef={dataCalenderRef} />
			</div>
			<DataCalender ref={dataCalenderRef} data={education} />
		</section>
	);
};

export default Education;
