import React from "react";
import "./Projects.css";
import Project from "./Project.js";
import imgWeather from "./resources/screenshots/simpl_weather.png";
import imgBlackjack from "./resources/screenshots/blackjack.png";
import imgPersonal from "./resources/screenshots/personal-site.png";
import imgDrivetest from "./resources/screenshots/drivetest-checker.png";

const Projects = () => {
	const projects = [
		{
			name: "simpl_weather",
			desc: "A bare-bones, ultra minimalist weather web app. Built with a mobile-first approach and fully responsive to different screen sizes.",
			stack: ["Javascript", "HTML", "CSS", "Express"],
			github: "https://github.com/martinivnv/simpl-weather",
			demo: "http://simpl-weather.herokuapp.com/",
			image: imgWeather,
		},
		{
			name: "Personal Website",
			desc: "This is the first thing I have built in React without following a tutorial. Quite happy with how it has turned out!",
			stack: ["React", "CSS"],
			github: "https://github.com/martinivnv/personal-site",
			demo: "",
			image: imgPersonal,
		},
		{
			name: "DriveTest Cancellation Checker",
			desc: "A program that sends you an email when someone with a earlier booking than you cancels their driving test.",
			stack: ["Python"],
			github: "https://github.com/martinivnv/drivetest-cancellation-checker",
			demo: "",
			image: imgDrivetest,
		},
		{
			name: "Python Blackjack",
			desc: "A fully functioning Blackjack game. This project was really good practice for implementing Object Oriented Programming principles.",
			stack: ["Python"],
			github: "https://github.com/martinivnv/python-blackjack",
			demo: "",
			image: imgBlackjack,
		},
	];
	return (
		<section id="projects">
			<h2>Some of My Projects</h2>
			<div id="projects-container">
				{projects.map((project) => (
					<Project info={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
