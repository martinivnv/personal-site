import React from "react";
import "./Home.css";
import myVideoV1 from "./resources/grid background.mp4";
import myVideoV2 from "./resources/grid background.ogg";
import ScrollDown from "./ScrollDown";
import SocialLinks from "./SocialLinks";
import Typist from "react-typist";

const Home = () => {
	return (
		<div id="home">
			<video autoPlay muted loop id="my-video">
				<source src={myVideoV1} type="video/mp4" />
				Your browser does not support the video tag. I suggest you upgrade your
				browser.
				<source src={myVideoV2} type="video/ogg" />
				Your browser does not support the video tag. I suggest you upgrade your
				browser.
			</video>
			<div className="content">
				<Typist cursor={{ show: false }} avgTypingDelay={80}>
					<h1 id="name">Hey, I'm Martin.</h1>
				</Typist>
				<p id="currently-working-on">
					I'm a Software Engineering student with a passion for learning new
					technologies! Currently, I am exploring new applications for
					artificial intelligence, merging with my interests in full stack
					development.
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
