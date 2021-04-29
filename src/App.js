import React from "react";
import { DataContext } from "./context";
import { Main } from "./pages";

const data = {
	full_name: "farzam Ahmed",
	first_name: "farzam",
	last_name: "Ali Ahmed",
	phone: "03353-65504",
	dob: "12/14/2000",
	email: "itsfarzisince2000@gmail.com",
	residence: "Pakistan, Karachi",
	address: "R-88 Farooq villaz, Landhi",
	status: "programmer",
	profile:
		"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
	me_sub_heading: "programmer",
	me_description:
		"Hello! I am Web Developer from United States, New York. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.",
	aboutMe_sub_heading: "my story",
	aboutMe_description:
		"Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.",
	experience_sub_heading: "working with",
	skills_sub_heading: "Developing with",
	education_sub_heading: "studied at",
	contact_sub_heading: "Let's Talk",
	signature: "images/signature.png",
	socials: [
		{
			className: "fab fa-facebook-f",
			link: "https://www.facebook.com/",
		},
		{
			className: "fab fa-github",
			link: "https://www.facebook.com/",
		},
	],
	experiences: [
		{
			title: "Mobile App Develop",
			sub_title: "Doozie Labs",
			from: "11/19/2019",
			description:
				"Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.",
		},
		{
			title: "Intermediate",
			sub_title: "The System Avenue",
			from: "11/19/2018",
			to: "11/19/2018",
			description:
				"Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.",
		},
	],
	education: [
		{
			title: "Bachelor in CS",
			from: "11/19/2019",
			sub_title: "ILMA University formerly IBT",
			description:
				"Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.",
		},
		{
			title: "Intermediate",
			from: "11/19/2017",
			to: "11/19/2019",
			sub_title: "Superior Science Degree College",
			description:
				"Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.",
		},
		{
			title: "Matriculation",
			from: "11/19/2016",
			to: "11/19/2014",
			sub_title: "Carrier house schooling System",
			description:
				"Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.",
		},
	],
	skills: [
		{
			title: "HTML",
			percentage: 70,
			description: "Etiam sit amet orci eget eros faucibus tincidunt.",
		},
		{
			title: "CSS",
			percentage: 70,
			description: "Etiam sit amet orci eget eros faucibus tincidunt.",
		},
		{
			title: "Javascript",
			percentage: 70,
			description: "Etiam sit amet orci eget eros faucibus tincidunt.",
		},
		{
			title: "React JS",
			percentage: 70,
			description: "Etiam sit amet orci eget eros faucibus tincidunt.",
		},
		{
			title: "React Native",
			percentage: 70,
			description: "Etiam sit amet orci eget eros faucibus tincidunt.",
		},
	],
};

function App() {
	return (
		<div className="App">
			<DataContext.Provider value={data}>
				<Main />
			</DataContext.Provider>
		</div>
	);
}

export default App;
