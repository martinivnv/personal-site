import React from "react";
import "./Projects.css";
import Project from "./Project.js";
import imgEatsy from "./resources/screenshots/eatsy-meal-prep.png";
// import imgWeather from "./resources/screenshots/simpl_weather.png";
import imgBlackjack from "./resources/screenshots/blackjack.png";
// import imgPersonal from "./resources/screenshots/personal-site.png";
import imgDrivetest from "./resources/screenshots/drivetest-checker.png";
import imgJobbase from "./resources/screenshots/jobbase.png";
import imgRayTracer from "./resources/screenshots/ray-tracer.png";
import imgSpace from "./resources/screenshots/spacestagram.png";

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
			name: "JobBase — Job Application Tracker and Visualizer",
			desc: "A desktop application that allows the user to track their job applications in a MySQL database and visualize the data through heatmaps, Sankey diagrams, and pie charts.",
			stack: ["Java", "MySQL"],
			github: "https://github.com/martinivnv/job-application-organiser",
			demo: "",
			image: imgJobbase,
		},
		// {
		// 	name: "Personal Website",
		// 	desc: "This website is the first project that I have built in React without following a tutorial. I used Adobe Illustrator for the logo and some custom icons, and used CSS and Chrome Dev Tools to style the components and add responsiveness.",
		// 	stack: ["React", "CSS"],
		// 	github: "https://github.com/martinivnv/personal-site",
		// 	demo: "",
		// 	image: imgPersonal,
		// },
		{
			name: "RealLight — Ray Tracing Simulator",
			desc: "A program that applies linear algebra and physics concepts to realistically simulate diffusion, reflection, and refraction of light as it interacts with different types of materials. Written with vanilla C++ from the ground up, without any APIs or external graphics libraries. The shown image was rendered using the program. ",
			stack: ["C++"],
			github: "https://github.com/martinivnv/ray-tracing-from-scratch",
			demo: "",
			image: imgRayTracer,
		},
		{
			name: "Spacestagram",
			desc: "A web app for viewing and learning about images from NASA's Astronomy Picture of the Day API. Built with a mobile-first approach and designed to be fully responsive to different screen sizes.",
			stack: ["React", "CSS"],
			github: "https://github.com/martinivnv/spacestagram",
			demo: "martinivnv.github.io/spacestagram/",
			image: imgSpace,
		},
		{
			name: "DriveTest Availability Finder",
			desc: "A program that sends you an email when someone ahead of you cancels their driving test. I automated the process using the selenium and smtplib Python libraries. Using this program, I was able to save 5 months of waiting to get my G2 driver's license!",
			stack: ["Python"],
			github: "https://github.com/martinivnv/drivetest-availability-finder",
			demo: "",
			image: imgDrivetest,
		},
		{
			name: "Python Blackjack",
			desc: "A fully functional Blackjack game built using the PyGame Python library. In creating this program, I relied heavily on object oriented programming principles to control the game loop flow, and used unit and integration testing to debug the complex game logic.",
			stack: ["Python"],
			github: "https://github.com/martinivnv/python-blackjack",
			demo: "",
			image: imgBlackjack,
		},
		// {
		// 	name: "simpl_weather",
		// 	desc: "A bare-bones, ultra minimalist weather web app that leverages the OpenWeatherMap API. Built with a mobile-first approach and designed to be fully responsive to different screen sizes.",
		// 	stack: ["JavaScript", "HTML", "CSS"],
		// 	github: "https://github.com/martinivnv/simpl-weather",
		// 	demo: "https://simpl-weather.netlify.app/",
		// 	image: imgWeather,
		// },
	];
	return (
		<section id="projects">
			<h2>My Project Portfolio</h2>
			<div id="projects-container">
				{projects.map((project) => (
					<Project info={project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
