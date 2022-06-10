import ResponsiveImage from "./ResponsiveImage";

import "./Hero.css";

function Hero() {
	return (
		<header className="hero">
			<div className="hero__overlay">
				<h1 className="hero__title font-secondary">WE ARE CREATIVES</h1>
				<img
					src=".\images\icon-arrow-down.svg"
					alt=""
					className="hero__arrow"
				/>
			</div>
			<ResponsiveImage
				className={"hero__image"}
				fileName={"header"}
				alt={"an orange"}
			/>
		</header>
	);
}

export default Hero;
