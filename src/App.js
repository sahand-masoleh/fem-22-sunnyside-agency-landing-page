import "./App.css";

import Nav from "./components/Nav";

import Hero from "./components/Hero";
import PointContainer from "./components/Point";
import TestimonialContainer from "./components/Testimonial";

function App() {
	return (
		<>
			<Nav />
			<main className="main">
				<Hero />
				<PointContainer />
				<TestimonialContainer />
			</main>
			<footer className="footer"></footer>
		</>
	);
}

export default App;
