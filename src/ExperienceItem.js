import React from "react";
import "./ExperienceItem.css";

const ExperienceItem = ({ info }) => {
	return (
		<div className="experience-item">
			<div className="experience-item-logo">
				<img src={info.logo} alt={info.name} className="image" width="108px" />
			</div>
			<div className="experience-item-content">
				<h3 className="experience-item-name">
					{info.role} @ {info.name}
				</h3>
				<p className="experience-item-dates">{info.dates}</p>
				<p className="experience-item-desc">{info.desc}</p>
			</div>
		</div>
	);
};

export default ExperienceItem;
