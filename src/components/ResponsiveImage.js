function ResponsiveImage({ className, fileName, alt }) {
	return (
		<picture className={className}>
			<source
				srcSet={`./images/desktop/image-${fileName}.jpg`}
				media={`(min-width: ${process.env.REACT_APP_BREAKPOINT})`}
			/>
			<img src={`./images/mobile/image-${fileName}.jpg`} alt={alt} />
		</picture>
	);
}

export default ResponsiveImage;
