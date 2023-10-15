import React, { useEffect } from "react";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import SocialLinks from "./SocialLinks";
import Typist from "react-typist";
import * as p5 from "p5";
import TRUNK from "vanta/src/vanta.trunk";

const Home = () => {
	useEffect(() => {
		TRUNK({
			el: "#background-js",
			mouseControls: false,
			touchControls: false,
			gyroControls: false,
			scale: 1.0,
			scaleMobile: 1.0,
			color: 0x3500d3,
			backgroundColor: 0x000000,
			spacing: 10.0,
			chaos: 10.0,
			p5: p5,
		});
	});

	return (
		<div id="home">
			<div id="background-js"></div>
			<div className="content">
				<Typist cursor={{ show: false }} avgTypingDelay={80}>
					<h1 id="name">Hey, I'm Martin.</h1>
				</Typist>
				<p id="currently-working-on">
					I'm a Software Engineering student with a passion for learning new
					technologies! Currently, I am exploring full stack web development.
				</p>
				<div id="socials-bar-home">
					<SocialLinks />
				</div>
			</div>
			<ScrollDown />
		</div>
	);
};

export default Home;
