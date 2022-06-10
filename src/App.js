import "./App.css";

import Nav from "./components/Nav";

import Hero from "./components/Hero";
import PointContainer from "./components/Point";

function App() {
	return (
		<>
			<Nav />
			<main className="main">
				<Hero />
				<PointContainer />
				<div className="testimonial-container"></div>
			</main>
			<footer className="footer"></footer>
		</>
	);
}

export default App;
