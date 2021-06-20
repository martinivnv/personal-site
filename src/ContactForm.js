import React, { useEffect, useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (window.location.search.includes("success=true")) {
			setSuccess(true);
		}
	}, []);

	return (
		<div className="form-container">
			<form
				name="contact"
				method="POST"
				action="/#contact/?success=true"
				data-netlify="true"
				id="contact-form"
			>
				<input type="hidden" name="form-name" value="contact" />
				<input
					type="text"
					label="name"
					name="name"
					id="contact-name"
					placeholder="Name"
				/>{" "}
				<br />
				<input
					type="email"
					label="email"
					name="email"
					id="contact-email"
					placeholder="Email"
				/>
				<br />
				<textarea
					rows="4"
					cols="50"
					id="contact-msg"
					label="message"
					name="message"
					placeholder="Message"
				/>
				<br />
				<button type="submit">Send</button>
				{success && <p style={{ color: "green" }}>Thanks for your message! </p>}
			</form>
		</div>
	);
};

export default ContactForm;
