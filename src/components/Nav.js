import { useState } from "react";

import "./Nav.css";

function Nav() {
	const [isHidden, setIsHidden] = useState(true);
	function hideMenu() {
		isHidden ? setIsHidden(false) : setIsHidden(true);
	}
	return (
		<div className="nav-container">
			<img src="./images/logo.svg" alt="logo" className="logo" />
			<nav className={`nav ${isHidden && "nav--hidden"}`}>
				<a href="#" className="nav__link">
					About
				</a>
				<a href="#" className="nav__link">
					Services
				</a>
				<a href="#" className="nav__link">
					Projects
				</a>
				<a href="#" className="nav__link nav__link--button font-secondary">
					CONTACT
				</a>
			</nav>
			<div className="hamburger pointer" onClick={hideMenu}>
				<img
					src="./images/icon-hamburger.svg"
					alt="hamburger menu icon"
					className="icon hamburger__icon"
				/>
			</div>
		</div>
	);
}

export default Nav;
