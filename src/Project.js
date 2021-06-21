import React from "react";
import "./Project.css";
import AnimatedImage from "./AnimatedImage.js";

const Project = (props) => {
	const info = props.info;
	return (
		<div className="project">
			<div className="project-image">
				<AnimatedImage
					source={info.image}
					ident={info.name}
					alt={info.name}
					width="300px"
				/>
			</div>
			<div className="project-content">
				<h3 className="project-name">{info.name}</h3>
				<p className="project-desc">{info.desc}</p>
				<ul className="project-stack">
					{info.stack.map((i) => (
						<li>{i}</li>
					))}
				</ul>
				<div className="project-links">
					<a
						className="project-button"
						href={info.github}
						rel="noreferrer"
						target="_blank"
					>
						GitHub
					</a>
					{info.demo !== "" && (
						<a
							className="project-button"
							href={info.demo}
							rel="noreferrer"
							target="_blank"
						>
							Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default Project;
