import React from "react"
import MdCheckCircle from "react-icons/lib/md/check-circle"
import "./about.css"

export default function About(props) {
	return (
		<div className="about">
			<header className="about-header">
				<div className="avatar-container">
					<img src="/images/avatar.PNG" alt="avatar" className="avatar" />
				</div>
			</header>
			<section className="about-body">
				<div className="job-title">
					<code>Software Engineer && Web Developer</code>
				</div>
				<div className="about-status hirable">
					<span>Status :</span> <MdCheckCircle size={18.67} />
					<code>Hirable</code>
				</div>
				<div className="about-introduction">
					<br />
					<p>
						Hi, I am a Javawscript developer in Sacramento,CA.I use MERN stack to build app that is
						secure, reliable and performant. Why MERN stack you might ask? because they work well
						together while remain non-opinionated at the same time.
					</p>
					<p>
						<cite>"A man becomes learned by asking questions."</cite> The most important reason I
						study web develpoment is because of how inclusive and embrassing this community. To stay
						relevant with tending technology we all have to learn to give and take, because we are
						insignificant as individual but we are able to achieve the impossible as a whole.
					</p>
					<br />
				</div>
			</section>
		</div>
	)
}
