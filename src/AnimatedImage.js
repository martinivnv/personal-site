import React from "react";
import "./AnimatedImage.css";

const AnimatedImage = (props) => {
	const width = props.width;
	const source = props.source;
	const ident = props.ident;
	return (
		<div className="image-container" id={ident}>
			<div className="underlay"></div>
			<img src={source} alt={ident} className="image" width={width} />
			<div className="overlay"></div>
		</div>
	);
};

export default AnimatedImage;
