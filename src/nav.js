import React from "react";
import "./nav.css";

const Nav = () => {
	return (
		<nav id="navbar">
			<ul id="nav-list">
				<li className="nav-item">
					<a href="#about">About</a>
				</li>
				<li className="nav-item">
					<a href="#projects">Projects</a>
				</li>
				<li className="nav-item">
					<a href="#contact">Contact Me</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
