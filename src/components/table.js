import React from "react";
import { chunk } from "lodash";

const Table = ({ data = [], noOfRows }) => {
	const renderItems = ({ name, value }, index) => (
		<tr key={index}>
			<td
				id="table-name"
				children={`${name}:`}
				className="heading-secondary"
			/>
			<td
				children={value}
				id="table-value"
				className="heading-tertiary"
			/>
		</tr>
	);

	const renderItem = (data, index) => (
		<table key={index}>{data.map(renderItems)}</table>
	);

	return (
		<div
			id="table"
			className="row-spaceBetween"
			children={chunk(data, noOfRows || data.length).map(renderItem)}
		/>
	);
};

export default Table;
