import ResponsiveImage from "./ResponsiveImage";

import "./Point.css";

var points = [
	[
		{
			title: "Transform your brand",
			text: " We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
			link: "LEARN MORE",
			accent: "yellow",
		},
		{
			image: "transform",
			alt: "an egg",
		},
	],
	[
		{
			image: "stand-out",
			alt: "a pint",
		},
		{
			title: "Stand out to the right audience",
			text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ",
			link: "LEARN MORE",
			accent: "pink",
		},
	],
	[
		{
			title: "Graphic Design",
			text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
			image: "graphic-design",
			alt: "cherries",
		},
		{
			title: "Photography",
			text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
			image: "photography",
			alt: "an orange",
		},
	],
];

function PointContainer() {
	return (
		<>
			<div className="point-container point-container--right">
				<Point point={points[0][0]} />
				<Point point={points[0][1]} />
			</div>
			<div className="point-container point-container--left">
				<Point point={points[1][0]} />
				<Point point={points[1][1]} />
			</div>
			<div className="point-container point-container--left">
				<Point point={points[2][0]} />
				<Point point={points[2][1]} />
			</div>
		</>
	);
}

function Point({ point }) {
	const { image, alt, accent, title, text, link } = point;
	const modifier =
		image && !title
			? "image-only"
			: !image && text
			? "text-only"
			: "text-n-image";
	return (
		<section className="point">
			{image && (
				<ResponsiveImage className="point__image" fileName={image} alt={alt} />
			)}
			{text && (
				<div className={`point__overlay point__overlay--${modifier}`}>
					{title && (
						<h2 className={`point__title point__title--${modifier} font-900`}>
							{title}
						</h2>
					)}
					{text && (
						<p className="point__text" data-type={image}>
							{text}
						</p>
					)}
					{link && (
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<a
							href="#"
							className="point__link font-900"
							style={{ "--accent": accent }}
						>
							{link}
						</a>
					)}
				</div>
			)}
		</section>
	);
}

export default PointContainer;
