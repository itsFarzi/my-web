import React, { Fragment } from "react";
import { ProgressBar } from ".";
import { map } from "lodash";

const PercentGrid = ({ data = [] }) => {
	data = data.length % 2 ? [...data, {}] : data;

	const renderItems = ({ percentage = 0, title, description }, index) => (
		<div id="percent-grid-item" key={index}>
			{!!title && (
				<Fragment>
					<p id="percent-grid-title" children={title} />
					<ProgressBar percentage={percentage} />
					<p
						children={description}
						className="heading-tertiary"
						id="percent-grid-description"
					/>
				</Fragment>
			)}
		</div>
	);
	return <div id="percent-grid" children={map(data, renderItems)} />;
};

export default PercentGrid;
