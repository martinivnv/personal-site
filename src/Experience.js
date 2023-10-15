import React from "react";
import ExperienceItem from "./ExperienceItem";
import imgPeernet from "./resources/exp-logos/peernet.jpg";
import imgCeridian from "./resources/exp-logos/ceridian.jpg";
import imgFresh from "./resources/exp-logos/freshbooks.png";
import imgTexas from "./resources/exp-logos/texasinstruments.jpg";

const Experience = () => {
	const experience = [
		{
			role: "Full-Stack Software Engineer Intern",
			name: "FreshBooks",
			logo: imgFresh,
			link: "https://www.freshbooks.com/",
			dates: "September 2023 - December 2023",
			desc: "🧪 Product Development Engineering Team",
			stack: ["JavaScript", "Python", "Ember.js"],
			stackColor: "#0075de",
		},
		{
			role: "Software Engineer Intern",
			name: "Texas Instruments",
			logo: imgTexas,
			link: "https://www.ti.com/",
			dates: "May 2023 - August 2023",
			desc: "💻 Code Composer Studio Base Team",
			stack: ["Python", "C++", "JavaScript", "Jenkins", "Bash"],
			stackColor: "#ed1b24",
		},
		{
			role: "Software Developer Intern",
			name: "Ceridian Dayforce",
			logo: imgCeridian,
			link: "https://ceridian.com/",
			dates: "May 2022 - August 2022",
			desc: "💸 Compensation Team",
			stack: ["JavaScript", "C#", "React.js", "SQL"],
			stackColor: "#0a1a3e",
		},
		{
			role: "Full Stack Developer Intern",
			name: "Peernet",
			logo: imgPeernet,
			link: "https://peernet.co/",
			dates: "September 2021 - December 2021",
			desc: "🚀 Feature Development",
			stack: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
			stackColor: "black",
		},
	];

	return (
		<section id="experience">
			<h2 style={{ marginBottom: "1em" }}>My Professional Experience</h2>
			<div id="projects-container">
				{experience.map((e) => (
					<ExperienceItem info={e} />
				))}
			</div>
		</section>
	);
};

export default Experience;
