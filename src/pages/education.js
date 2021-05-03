import React, { useContext, useRef } from "react";
import { Controller } from "../components/dataCalender";
import { DataCalender } from "../components";
import { DataContext, GeneralContext } from "../context";

const Education = () => {
	const { education, education_sub_heading } = useContext(DataContext);
	const { isMobile } = useContext(GeneralContext);
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
				{!isMobile && <Controller dataCalenderRef={dataCalenderRef} />}
			</div>
			<DataCalender ref={dataCalenderRef} data={education} />
			{isMobile && <Controller dataCalenderRef={dataCalenderRef} />}
		</section>
	);
};

export default Education;
