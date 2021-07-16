import React from "react";
import "./Projects.css";
import Project from "./Project.js";
import imgEatsy from "./resources/screenshots/eatsy-meal-prep.png";
import imgWeather from "./resources/screenshots/simpl_weather.png";
import imgBlackjack from "./resources/screenshots/blackjack.png";
import imgPersonal from "./resources/screenshots/personal-site.png";
import imgDrivetest from "./resources/screenshots/drivetest-checker.png";

const Projects = () => {
	const projects = [
		{
			name: "Eatsy — Meal Prep Made Easy",
			desc: "A full-stack app for planning and tracking your meals to save money and reduce food waste. Reads meals from a MongoDB database using a custom-built API and displays them in a calendar, allowing the user to add, update, and delete meals.",
			stack: ["MongoDB", "Express", "React", "Node.js"],
			github: "https://github.com/martinivnv/meal-prep-app",
			demo: "https://eatsy-meal-prep.netlify.app/",
			image: imgEatsy,
		},
		{
			name: "simpl_weather",
			desc: "A bare-bones, ultra minimalist weather web app that leverages the Openweathermap API. Built with a mobile-first approach and designed to be fully responsive to different screen sizes.",
			stack: ["JavaScript", "HTML", "CSS", "Express"],
			github: "https://github.com/martinivnv/simpl-weather",
			demo: "https://simpl-weather.netlify.app/",
			image: imgWeather,
		},
		{
			name: "Personal Website",
			desc: "This website is the first project that I have built in React without following a tutorial. I used Adobe Illustrator for the logo and some custom icons, and used CSS and Chrome Dev Tools to style the components and add responsiveness.",
			stack: ["React", "CSS"],
			github: "https://github.com/martinivnv/personal-site",
			demo: "",
			image: imgPersonal,
		},
		{
			name: "DriveTest Cancellation Checker",
			desc: "A program that sends you an email when someone ahead of you cancels their driving test. I automated the process using the selenium and smtplib Python libraries. Using this program, I was able to get my G2 license 2 months early.",
			stack: ["Python"],
			github: "https://github.com/martinivnv/drivetest-cancellation-checker",
			demo: "",
			image: imgDrivetest,
		},
		{
			name: "Python Blackjack",
			desc: "A fully functional Blackjack game built using the pygame Python library. In creating this program, I learned a lot about and relied heavily on Object Oriented Programming principles.",
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
