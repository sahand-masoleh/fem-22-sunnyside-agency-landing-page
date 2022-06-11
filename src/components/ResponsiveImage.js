function ResponsiveImage({ className, fileName, alt }) {
	return (
		<picture className={className}>
			<source
				srcSet={`./images/desktop/image-${fileName}.jpg`}
				media={`(min-width: ${process.env.REACT_APP_BREAKPOINT})`}
				className="image"
			/>
			<img
				src={`./images/mobile/image-${fileName}.jpg`}
				alt={alt}
				className="image"
			/>
		</picture>
	);
}

export default ResponsiveImage;
