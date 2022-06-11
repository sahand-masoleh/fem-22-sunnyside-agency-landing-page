import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer__logo" aria-label="logo"></div>
			<div className="footer__link-container">
				<a href="#" className="footer__link">
					About
				</a>
				<a href="#" className="footer__link">
					Services
				</a>
				<a href="#" className="footer__link">
					Projects
				</a>
			</div>
			<div className="footer__social-container">
				<div
					aria-label="facebook icon"
					className="footer__social pointer"
				></div>
				<div
					aria-label="facebook icon"
					className="footer__social pointer"
				></div>
				<div
					aria-label="facebook icon"
					className="footer__social pointer"
				></div>
				<div
					aria-label="facebook icon"
					className="footer__social pointer"
				></div>
			</div>
			<div className="attribution">
				Challenge by{" "}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer"
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://www.frontendmentor.io/profile/sahand-masoleh"
					target="_blank"
					rel="noreferrer"
				>
					Sahand Masoleh
				</a>
				.
			</div>
		</div>
	);
}

export default Footer;
