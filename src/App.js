import "./App.css";

import Nav from "./components/Nav";

import Hero from "./components/Hero";
import PointContainer from "./components/Point";
import TestimonialContainer from "./components/Testimonial";
import Gallery from "./components/Gallery";

function App() {
	return (
		<>
			<Nav />
			<main className="main">
				<Hero />
				<PointContainer />
				<TestimonialContainer />
				<Gallery />
			</main>
			<footer className="footer"></footer>
		</>
	);
}

export default App;
