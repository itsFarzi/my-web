import React from "react";

const ProgressBar = ({ percentage = 0 }) => (
	<div id="progress-bar">
		<div id="progress-bar-label" style={{ width: `${percentage}%` }}>
			<p id="progress-bar-label-text" children={`${percentage}%`} />
		</div>
		<div id="progress-bar-indicator">
			<div
				id="progress-bar-indicator-bar"
				style={{ width: `${percentage}%` }}
			/>
		</div>
	</div>
);
export default ProgressBar;
