import React from "react";
import "./About.css";
import AnimatedImage from "./AnimatedImage";
import portrait from "./resources/portrait.png";

const About = () => {
	return (
		<section id="about">
			<h2>About Me</h2>
			<article id="story">
				<div id="content">
					<p>
						My fascination with computer science began when I was around 11
						years old and I watched a movie from the 80's called{" "}
						<em>War Games</em>. My imagination was captured, and I immediately
						picked up a book about Ruby for beginners from the library. Although
						I couldn't get Ruby to work on my parents' computer, I was so
						absorbed in understanding the logic of the code that I read the book
						cover to cover like a novel.
					</p>
					<p>
						After taking a few programming courses in high school, I discovered
						that my enthusiasm for Software Engineering makes it the perfect
						career choice for me. I made it my goal to create software that will
						provide value to people around the world.
					</p>
					<p>
						Currently, I'm studying{" "}
						<span className="highlighted-text">Software Engineering</span> at{" "}
						<span className="highlighted-text">McMaster University</span> and
						seeking internships for{" "}
						<span className="highlighted-text">Summer 2024</span>.
					</p>
					<p>
						I have experience with:
						<ul className="list">
							<li>JavaScript</li>
							<li>Python</li>
							<li>Java</li>
							<li>React</li>
							<li>Node.js</li>
							<li>MongoDB</li>
							<li>SQL</li>
							<li>HTML</li>
							<li>Git</li>
							<li>Linux</li>
							<li>Bash</li>
							<li>C#</li>
							<li>C</li>
							<li>C++</li>
							<li>CSS</li>
						</ul>
					</p>
				</div>
				<AnimatedImage
					source={portrait}
					ident="portrait"
					alt="Portrait"
					width="300px"
				/>
			</article>
		</section>
	);
};

export default About;
