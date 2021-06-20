import React from "react";
import "./About.css";
import AnimatedImage from "./AnimatedImage";
import portrait from "./resources/portrait.png";

const About = () => {
	return (
		<section id="about">
			<h2>About Me</h2>
			<article id="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<AnimatedImage
					source={portrait}
					ident="portrait"
					alt="Portrait"
					width="300px"
					height="300px"
				/>
			</article>
		</section>
	);
};

export default About;
