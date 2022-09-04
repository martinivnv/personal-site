import React from "react";
import "./Footer.css";
import Logo from "./resources/logo.png";
import SocialLinks from "./SocialLinks";

const Footer = () => {
	return (
		<footer id="footer">
			<div id="socials-bar-footer">
				<SocialLinks style={{ fontSize: "1em" }} />
			</div>
			<div id="copyright">
				<img
					id="footer-logo"
					src={Logo}
					alt="Logo"
					width="35px"
					height="35px"
				/>
				<p id="footer-text">© Martin Ivanov 2022</p>
			</div>
		</footer>
	);
};

export default Footer;
