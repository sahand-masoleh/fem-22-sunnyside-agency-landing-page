import "./App.css";

import Nav from "./components/Nav";

import ResponsiveImage from "./components/ResponsiveImage";
import PointContainer from "./components/Point";

function App() {
	return (
		<>
			<Nav />
			<main className="main">
				<header className="hero">
					<h1 className="hero__title">WE ARE CREATIVES</h1>
					<ResponsiveImage
						className={"hero__image"}
						fileName={"header"}
						alt={"an orange"}
					/>
				</header>
				<PointContainer />
				<div className="testimonial-container"></div>
			</main>
			<footer className="footer"></footer>
		</>
	);
}

export default App;
