import React, { useContext } from "react";
import { Experience, Me, AboutMe, Education, Skills, Contact } from ".";
import { DataContext } from "../context";
import { Header } from "../components";

const Main = () => {
	const { socials, profile } = useContext(DataContext);

	const renderSocials = ({ className, link }, index) => (
		<a href={link} key={index} target="_blank" rel="noopener noreferrer">
			<i
				key={index}
				id="main-socials-item"
				className={`${className} chameleons`}
				style={{ marginTop: index ? "15px" : 0 }}
			/>
		</a>
	);

	return (
		<div id="main">
			<Header />
			<div id="main-content">
				<div id="main-album">
					<div
						id="main-album-image"
						style={{ backgroundImage: `url(${profile})` }}
					/>
				</div>
				<div id="main-album" className="display-clone" />
				<div id="main-pages">
					<Me />
					<AboutMe />
					<Experience />
					<Education />
					<Skills />
					<section id="portfolio" />
					<Contact />
				</div>
				<div
					id="main-socials"
					className="display-clone"
					children={socials.map(renderSocials)}
				/>
				<div id="main-socials" children={socials.map(renderSocials)} />
			</div>
		</div>
	);
};

export default Main;
