import React from "react";
import ExperienceItem from "./ExperienceItem";
import imgPeernet from "./resources/exp-logos/peernet.jpg";
import imgCeridian from "./resources/exp-logos/ceridian.jpg";

const Experience = () => {
	const experience = [
		{
			role: "Software Developer Intern",
			name: "Ceridian",
			logo: imgCeridian,
			link: "https://ceridian.com/",
			dates: "May 2022 - August 2022",
			desc: "Placeholder",
		},
		{
			role: "Software Developer Intern",
			name: "Peernet",
			logo: imgPeernet,
			link: "https://peernet.co/",
			dates: "September 2021 - December 2021",
			desc: "Placeholder",
		},
	];

	return (
		<section id="experience">
			<h2>My Work Experience</h2>
			<div id="projects-container">
				{experience.map((e) => (
					<ExperienceItem info={e} />
				))}
			</div>
		</section>
	);
};

export default Experience;
