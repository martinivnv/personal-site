import React from "react";
import "./ExperienceItem.css";

const ExperienceItem = ({ info }) => {
	return (
		<div className="experience">
			<div className="experience-logo">
				<img src={info.logo} alt={info.name} className="image" width="108px" />
			</div>
			<div className="experience-content">
				<div className="experience-name-and-dates">
					<h3 className="experience-name">
						<div>{info.role}</div> <text>@</text>
						<div>
							<a
								className="experience-link rainbow-hover"
								href={info.link}
								rel="noreferrer"
								target="_blank"
							>
								{info.name}
							</a>
						</div>
					</h3>
					<p className="experience-dates">{info.dates}</p>
				</div>
				<p className="experience-desc">{info.desc}</p>
				<ul className="experience-stack">
					{info.stack.map((i) => (
						<li style={{ backgroundColor: info.stackColor }}>{i}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ExperienceItem;
