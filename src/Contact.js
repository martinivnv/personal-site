import React from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<section id="contact">
			<h2 id="contact-title">Let's Connect!</h2>
			<p id="contact-text">
				Want to discuss a project, ask a question, or just say hi? Leave me a
				message and I'll make sure to get back to you.
			</p>
			<ContactForm />
		</section>
	);
};

export default Contact;
