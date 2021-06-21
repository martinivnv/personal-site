import React from "react";
import "./Nav.css";
import Logo from "./resources/logo.png";

const Nav = () => {
	return (
		<nav id="navbar">
			<a href="#home">
				<img id="nav-logo" src={Logo} alt="Logo" width="65px" height="65px" />
			</a>
			<ul id="nav-list">
				<li className="nav-item">
					<a href="#about">About Me</a>
				</li>
				<li className="nav-item">
					<a href="#projects">My Projects</a>
				</li>
				<li className="nav-item">
					<a href="#contact">Contact Me</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
