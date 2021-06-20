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
			{success && (
				<p style={{ color: "#18ff18", fontSize: "1.2em", margin: "5px" }}>
					Submitted. Thanks for your message!
				</p>
			)}
			<form
				name="contact"
				method="POST"
				action="/?success=true/#contact"
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
					rows="8"
					cols="70"
					id="contact-msg"
					label="message"
					name="message"
					placeholder="Message"
				/>
				<br />
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default ContactForm;
