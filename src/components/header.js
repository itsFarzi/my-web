import { findLastIndex, lastIndexOf } from "lodash";
import React, { useEffect, useState } from "react";

const panels = [
	{ name: "me", id: "me" },
	{ name: "about me", id: "about-me" },
	{ name: "resume", id: "experience" },
	{ name: "portfolio", id: "portfolio" },
	{ name: "contact", id: "contact" },
];

const Header = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [menuVisible, setMenuVisible] = useState(false);

	const toggleMenuVisible = () => setMenuVisible(!menuVisible);

	// useEffect(() => {
	// 	const mainContent = document.getElementById("main-content");

	// 	mainContent.addEventListener("scroll", ({ target }) => {
	// 		const offSets = [];
	// 		panels.map(({ id }, index) => {
	// 			const section = document.getElementById(id);
	// 		});
	// 	});
	// }, [activeIndex]);

	const renderHeaderItems = ({ name, id }, index) => {
		const active = index === activeIndex;
		return (
			<a key={index} href={`#${id}`}>
				<p
					key={index}
					children={name}
					onClick={() => {
						setActiveIndex(index);
						toggleMenuVisible();
					}}
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
			<div id="header-right-menu" onClick={toggleMenuVisible}>
				<i className={menuVisible ? "fas fa-times" : "fas fa-bars"} />
			</div>
			<div id="header-right" className="row-center">
				<div
					id="header-items"
					children={panels.map(renderHeaderItems)}
				/>
				<span
					id="header-cv-button"
					className="button-primary row-center">
					<p>Download cv</p>
					<i className={"fas fa-download 1"} />
				</span>
			</div>
			<div
				className={`header-item-tablet ${
					menuVisible ? "header-item-tablet-active" : ""
				}`}
				children={panels.map(renderHeaderItems)}></div>
		</div>
	);
};

export default Header;
