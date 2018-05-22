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
						Wise man once said<cite>"A man becomes learned by asking questions."</cite> To stay
						relevant with trending technology we all have to learn from and share with each other,
						because we are insignificant as individual but we are able to achieve the impossible as
						a whole.
					</p>
					<br />
				</div>
			</section>
		</div>
	)
}
