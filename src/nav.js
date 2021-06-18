import React from "react";
import "./nav.css";
import Logo from "./resources/logo.png";

const Nav = () => {
	return (
		<nav id="navbar">
			<img id="logo" src={Logo} alt="Logo" width="70px" height="70px" />
			<ul id="nav-list">
				<li className="nav-item">
					<a href="#about">About Me</a>
				</li>
				<li className="nav-item">
					<a href="#projects">My Projects</a>
				</li>
				<li className="nav-item">
					<a href="#contact">Let's Talk</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
