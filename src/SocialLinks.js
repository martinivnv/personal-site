import React from "react";
import "./SocialLinks.css";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedinIn,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = () => {
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
		</div>
	);
};

export default SocialLinks;
