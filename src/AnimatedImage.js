import React from "react";
import "./AnimatedImage.css";

const AnimatedImage = (props) => {
	const width = props.width;
	const source = props.source;
	const ident = props.ident;
	const altTxt = props.altTxt;
	return (
		<div className="image-container" id={ident}>
			<div class="underlay"></div>
			<img src={source} alt={altTxt} class="image" width={width} />
			<div class="overlay"></div>
		</div>
	);
};

export default AnimatedImage;
