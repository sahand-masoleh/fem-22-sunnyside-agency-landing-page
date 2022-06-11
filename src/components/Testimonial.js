import "./Testimonials.css";

var testimonials = [
	{
		text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
		client: "Emily R.",
		position: "Marketing Director",
		avatar: "emily",
	},
	{
		text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
		client: "Thomas S.",
		position: "Chief Operating Officer",
		avatar: "thomas",
	},
	{
		text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
		client: "Jennie F.",
		position: "Business Owner",
		avatar: "jennie",
	},
];

function TestimonialContainer() {
	return (
		<div className="testimonial-container">
			<header className="testimonial-container__header font-900">
				CLIENT TESTIMONIALS
			</header>
			<Testimonial testimonial={testimonials[0]} />
			<Testimonial testimonial={testimonials[1]} />
			<Testimonial testimonial={testimonials[2]} />
		</div>
	);
}

function Testimonial({ testimonial }) {
	const { text, client, position, avatar } = testimonial;
	return (
		<div className="testimonial">
			<img
				src={`./images/image-${avatar}.jpg`}
				alt=""
				className="testimonial__avatar"
			/>
			<p className="testimonial__text">{text}</p>
			<div>
				<h3 className="testimonial__client font-900">{client}</h3>
				<p className="testimonial__position">{position}</p>
			</div>
		</div>
	);
}

export default TestimonialContainer;
