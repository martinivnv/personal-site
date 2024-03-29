import React from "react";
import "./Nav.css";
import Logo from "./resources/logo.png";

const Nav = () => {
	return (
		<nav id="navbar">
			<a href="#home">
				<img id="nav-logo" src={Logo} alt="Logo" width="60px" height="60px" />
			</a>
			<ul id="nav-list">
				<li className="nav-item">
					<a href="#about">About Me</a>
				</li>
				<li className="nav-item">
					<a href="#experience">Experience</a>
				</li>
				<li className="nav-item">
					<a href="#projects">Projects</a>
				</li>
				<li className="nav-item">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
