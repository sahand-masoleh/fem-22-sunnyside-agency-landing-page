import ResponsiveImage from "./ResponsiveImage";

import "./Gallery.css";

function Gallery() {
	return (
		<div className="gallery">
			<InnerContainer
				pics={[
					["gallery-milkbottles", "milkbottles"],
					["gallery-orange", "an orange"],
				]}
			/>
			<InnerContainer
				pics={[
					["gallery-cone", "a cone"],
					["gallery-sugar-cubes", "sugar cubes"],
				]}
			/>
		</div>
	);
}

function InnerContainer({ pics }) {
	return (
		<div className="gallery__inner-container">
			<ResponsiveImage
				className={"gallery__image"}
				fileName={pics[0][0]}
				alt={pics[0][1]}
			/>
			<ResponsiveImage
				className={"gallery__image"}
				fileName={pics[1][0]}
				alt={pics[1][1]}
			/>
		</div>
	);
}

export default Gallery;
