import React, { useState } from "react";

const panels = [
	{ name: "me", id: "me" },
	{ name: "about me", id: "about-me" },
	{ name: "resume", id: "experience" },
	{ name: "portfolio", id: "portfolio" },
	{ name: "contact", id: "contact" },
];

const Header = () => {
	const [activePanel, setActivePanel] = useState(panels[0].id);

	const renderHeaderItems = ({ name, id }, index) => {
		const active = id === activePanel;
		return (
			<a key={index} href={`#${id}`}>
				<p
					key={index}
					children={name}
					onClick={() => setActivePanel(id)}
					className={`header-item chameleons ${
						active ? "header-item-active" : ""
					}`}
				/>
			</a>
		);
	};

	return (
		<div id="header" className="header">
			<div id="header-logo" className="row-center">
				<img alt="logo" id="header-logo-img" src="/images/logo.png" />
				<div id="header-logo-name">
					<p>Farzam </p>
					<p>Ali Ahmed</p>
				</div>
			</div>
			<div className="row-center">
				<div
					id="header-items"
					children={panels.map(renderHeaderItems)}
				/>
				<span className="button-primary row-center">
					<p>Download cv</p>
					<i className="fas fa-download 1" />
				</span>
			</div>
		</div>
	);
};

export default Header;
