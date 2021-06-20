import React from "react";
import "./Footer.css";
import Logo from "./resources/logo.png";

const Footer = () => {
	return (
		<footer id="footer">
			<img id="footer-logo" src={Logo} alt="Logo" width="35px" height="35px" />
			<p id="footer-text">© Martin Ivanov 2021</p>
		</footer>
	);
};

export default Footer;
