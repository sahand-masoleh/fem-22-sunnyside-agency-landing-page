function Nav() {
	return (
		<div className="nav-container">
			<img src="./images/logo.svg" alt="logo" className="logo" />
			<nav className="nav">
				<a href="#" className="nav__link">
					About
				</a>
				<a href="#" className="nav__link">
					Services
				</a>
				<a href="#" className="nav__link">
					Projects
				</a>
				<a href="#" className="nav__link nav__link--button">
					CONTACT
				</a>
			</nav>
			<button className="hamburger">=</button>
		</div>
	);
}

export default Nav;
