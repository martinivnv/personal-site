import React from "react";
import "./nav.css";

const Nav = () => {
	return (
		<nav id="navbar">
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
