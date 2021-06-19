import React from "react";
import "./home.css";
import myVideoV1 from "./resources/grid background.mp4";
import myVideoV2 from "./resources/grid background.ogg";

const Home = () => {
	return (
		<section id="home">
			<video autoPlay muted loop id="my-video">
				<source src={myVideoV1} type="video/mp4" />
				Your browser does not support the video tag. I suggest you upgrade your
				browser.
				<source src={myVideoV2} type="video/ogg" />
				Your browser does not support the video tag. I suggest you upgrade your
				browser.
			</video>

			<div className="content">
				<h1>Hey, I'm Martin Ivanov.</h1>
				<p id="currently-working-on">
					I'm an aspiring Software Engineer with a passion for learning new
					technologies. I am currently exploring full stack web development in
					my free time.
				</p>
			</div>
		</section>
	);
};

export default Home;
