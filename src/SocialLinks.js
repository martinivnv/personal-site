import React from "react";
import "./SocialLinks.css";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedinIn,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "./resources/Martin Ivanov Software Co-op Resume 2022.pdf";

const SocialLinks = () => {
	const onResumeClick = () => {
		window.open(Resume);
	};
	return (
		<div class="social-links">
			<a
				id="github"
				class="icon-link"
				href="https://github.com/martinivnv"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a
				id="linkedin"
				class="icon-link"
				href="https://ca.linkedin.com/in/martinivnv"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faLinkedinIn} />
			</a>
			<a id="email" class="icon-link" href="mailto:martinivnv2002@gmail.com">
				<FontAwesomeIcon icon={faAt} />
			</a>
			<a
				id="instagram"
				class="icon-link"
				href="https://instagram.com/martin.ivnv"
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon icon={faInstagram} />
			</a>
			{/* eslint-disable-next-line */}
			<a
				id="resume"
				class="icon-link"
				onClick={onResumeClick}
				rel="noreferrer"
				target="_blank"
			>
				<FontAwesomeIcon
					icon={{
						prefix: "fac",
						iconName: "resume",
						icon: [
							43,
							22.5,
							[],
							null,
							"M6.56,19.18l-1-2.35a1.13,1.13,0,0,0-.4-.5,1.07,1.07,0,0,0-.62-.17H4.25v3H2.88V11.89H5A5.25,5.25,0,0,1,6.1,12a2.28,2.28,0,0,1,.84.34,1.55,1.55,0,0,1,.53.63,2.18,2.18,0,0,1,.19.94,1.92,1.92,0,0,1-.12.71,1.63,1.63,0,0,1-.33.54,1.86,1.86,0,0,1-.5.37,2.64,2.64,0,0,1-.64.19.91.91,0,0,1,.49.31,2.64,2.64,0,0,1,.44.71l1.17,2.45ZM6.22,14a.9.9,0,0,0-.34-.77,1.89,1.89,0,0,0-1-.23h-.6v2.06h.56A2.1,2.1,0,0,0,5.39,15a1.19,1.19,0,0,0,.44-.2,1,1,0,0,0,.29-.33A1.11,1.11,0,0,0,6.22,14Z M9.47,19.18V11.89h4.39v1.16h-3v1.81h2.85V16H10.87v2h3v1.16Z M20.42,17a2.25,2.25,0,0,1-.22,1,2,2,0,0,1-.61.73,3,3,0,0,1-.95.43,4.93,4.93,0,0,1-1.19.13,9.79,9.79,0,0,1-1.11-.06A6.47,6.47,0,0,1,15.28,19V17.66l.53.17.56.13.56.09a3.48,3.48,0,0,0,.55,0,2.52,2.52,0,0,0,.66-.07,1.32,1.32,0,0,0,.45-.18.74.74,0,0,0,.25-.28.86.86,0,0,0,.08-.36.69.69,0,0,0-.16-.45,1.31,1.31,0,0,0-.4-.32,3.76,3.76,0,0,0-.57-.25q-.33-.11-.66-.24a5.37,5.37,0,0,1-.65-.29,2.33,2.33,0,0,1-.57-.4,1.81,1.81,0,0,1-.41-.57,1.94,1.94,0,0,1-.15-.8,2.25,2.25,0,0,1,.15-.82,1.79,1.79,0,0,1,.5-.67,2.59,2.59,0,0,1,.86-.46,4.22,4.22,0,0,1,1.26-.17l.46,0,.47.05.44.08a3.53,3.53,0,0,1,.4.08v1.26l-.39-.13c-.15,0-.29-.07-.44-.09L18.6,13l-.43,0a2.77,2.77,0,0,0-.62.06,1.4,1.4,0,0,0-.41.16.61.61,0,0,0-.23.25.77.77,0,0,0-.08.34.53.53,0,0,0,.16.39,1.61,1.61,0,0,0,.4.3,3.89,3.89,0,0,0,.58.24l.66.25q.33.13.66.3a2.54,2.54,0,0,1,.57.4A1.74,1.74,0,0,1,20.42,17Z M26.81,16.49a3.8,3.8,0,0,1-.18,1.23,2.51,2.51,0,0,1-.54.88,2.23,2.23,0,0,1-.85.53,3.58,3.58,0,0,1-1.13.17,3.81,3.81,0,0,1-1.2-.17,2,2,0,0,1-.82-.52,1.89,1.89,0,0,1-.45-.81,4,4,0,0,1-.14-1.08V11.89h1.37v4.75a2.59,2.59,0,0,0,.07.65,1.06,1.06,0,0,0,.22.48,1,1,0,0,0,.4.3,1.51,1.51,0,0,0,.6.1,1.64,1.64,0,0,0,.58-.09,1,1,0,0,0,.39-.27,1.36,1.36,0,0,0,.23-.5,2.58,2.58,0,0,0,.08-.73V11.89h1.37Z M32.12,19.18,32,15.05l0-1.64-.35,1.11L30.78,17h-.86l-.73-2.49-.31-1.11,0,1.61-.12,4.16H27.55l.36-7.29h1.55L30.1,14l.31,1.16.3-1.1.68-2.13H33l.36,7.29Z M34.61,19.18V11.89H39v1.16H36v1.81h2.85V16H36v2h3v1.16Z M43,22.5H0V0H35.21L43,7.79Zm-42-1H42V8.21L34.79,1H1Z M42.87,9,33.87,9,33.87,0.5,34.87,0.5,34.87,8,42.87,8,42.87,9Z",
						],
					}}
				/>
			</a>
		</div>
	);
};

export default SocialLinks;
