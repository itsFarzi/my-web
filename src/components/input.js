import React from "react";

const Input = ({ title, comment, ...props }) => (
	<div id="input-container">
		{title && (
			<p id="input-title">
				{title}
				<span children="*" />
			</p>
		)}
		{comment ? (
			<textarea className="text-area" id="input" {...props} />
		) : (
			<input id="input" {...props} />
		)}
	</div>
);

export default Input;
