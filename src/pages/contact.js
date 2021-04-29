import React, { useContext, useState } from "react";
import { Input, Table } from "../components";
import { DataContext } from "../context";
import { getAge } from "../helper";
import { map } from "lodash";

const Form = ({ data = [], onSuccess = () => {} }) => {
	const [values, setValues] = useState({});

	const onChange = ({ target: { name, value } }) =>
		setValues({ ...values, [name]: value });

	const onSubmit = e => {
		e.preventDefault();
		onSuccess();
	};

	return (
		<form id="contact-form" onSubmit={onSubmit}>
			{map(data, ({ name, ...item }) => (
				<Input
					{...item}
					required
					name={name}
					onChange={onChange}
					value={values[name] || ""}
				/>
			))}
			<button
				type="submit"
				className="button-primary button-primary-hover row-center">
				<p>Send</p>
				<i className="fas fa-chevron-right" />
			</button>
		</form>
	);
};

const Contact = () => {
	const {
		dob,
		email,
		phone,
		status,
		address,
		residence,
		freelance,
		full_name,
		signature,
		contact_sub_heading,
	} = useContext(DataContext);

	const inputs = [
		{
			name: "name",
			title: "Name",
			placeholder: "Your name",
		},
		{
			name: "email",
			title: "Email",
			placeholder: "enter your email",
		},
		{
			name: "message",
			comment: true,
			title: "Message",
			placeholder: "Enter your message",
		},
	];

	const data = [
		{ name: "Age", value: getAge(new Date(dob)) },
		{
			name: "Freelance",
			value: freelance ? "Available" : "Not Available",
		},
		{ name: "Residence", value: residence },
		{ name: "Address", value: address },
		{ name: "phone", value: phone },
		{ name: "email", value: email },
	];

	return (
		<div id="contact">
			<p className="heading-primary" children={"Contact me"} />
			<p
				children={contact_sub_heading}
				className="heading-secondary heading-secondary-margin"
			/>
			<div id="contact-content" className="flex">
				<Form
					data={inputs}
					onSuccess={() => alert("I'll get back to you :)")}
				/>
				<div id="contact-data">
					<p id="contact-data-heading" children={full_name} />
					<p children={status} id="contact-data-heading-sub" />
					<div
						children={map(data, ({ name, value }, index) => (
							<div className="row contact-data-item" key={index}>
								<p
									id="contact-data-name"
									children={`${name}:`}
								/>
								<p id="contact-data-value" children={value} />
							</div>
						))}
					/>
					<img id="contact-data-signature" src={signature} alt="signature" />
				</div>
			</div>
		</div>
	);
};

export default Contact;
