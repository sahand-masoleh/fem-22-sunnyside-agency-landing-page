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
				<img
					src="./images/icon-facebook.svg"
					alt="facebook icon"
					className="footer__social"
				/>
				<img
					src="./images/icon-instagram.svg"
					alt="facebook icon"
					className="footer__social"
				/>
				<img
					src="./images/icon-twitter.svg"
					alt="facebook icon"
					className="footer__social"
				/>
				<img
					src="./images/icon-pinterest.svg"
					alt="facebook icon"
					className="footer__social"
				/>
			</div>
		</div>
	);
}

export default Footer;
