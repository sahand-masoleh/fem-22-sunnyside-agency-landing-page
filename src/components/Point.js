import ResponsiveImage from "./ResponsiveImage";

var points = [
	[
		{
			title: "Transform your brand",
			text: " We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
			link: "Learn more",
		},
		{
			image: "transform",
			alt: "an egg",
		},
	],
	[
		{
			title: "Stand out to the right audience",
			text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. ",
			link: "Learn more",
		},
		{
			image: "stand-out",
			alt: "a pint",
		},
	],
	[
		{
			title: "Graphic design",
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
	const { image, alt, title, text, link } = point;
	const modifier =
		image && !title
			? "point--image-only"
			: !image && text
			? "point--text-only"
			: "point--text-n-image";
	return (
		<section className={`point ${modifier}`}>
			{image && (
				<ResponsiveImage className="point__image" fileName={image} alt={alt} />
			)}
			{title && <h2 className="point__title">{title}</h2>}
			{text && <p>{text}</p>}
			{link && <a href="#">{link}</a>}
		</section>
	);
}

export default PointContainer;
