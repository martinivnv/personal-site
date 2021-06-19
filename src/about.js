import React from "react";
import "./about.css";
import portrait from "./resources/portrait.png";

const About = () => {
	return (
		<section id="about">
			<h2>About Me</h2>
			<article id="story">
				<p>
					When I was around 9 or 10 years old, I learned about computer
					programming from a movie called <em>War Games</em> and I was
					immediately fascinated. The very next day, I headed to the library and
					took out a book about Ruby for beginners. I read it cover to cover in
					a day or two — without writing a single line of code! Despite my best
					efforts, I couldn't get Ruby to work on my family's computer, but I
					was so engrossed in understanding the logic of the programs detailed
					in the book that I devoured it like a <em>Harry Potter</em> novel.
				</p>
				<img
					src={portrait}
					id="portrait"
					class="image"
					alt="Portrait"
					width="300px"
					height="300px"
				/>
			</article>
		</section>
	);
};

export default About;
