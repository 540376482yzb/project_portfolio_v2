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
					<span>Software Engineer && Web Developer</span>
				</div>
				<div className="about-status hirable">
					<span>Status :</span> <MdCheckCircle size={18.67} />
					<span>Hirable</span>
				</div>
				<div className="about-introduction">
					<p>
						Hi, I am a Javawscript developer in Sacramento,CA.I use MERN stack to build app that is
						secure, reliable and performant.
					</p>
					<p>
						I have been coding in Javascript for a year. I found passion building scalable web
						applications and learning new technology.
					</p>
					<p>
						I am excited to work with great team to build top-notch products that can be used by
						people around the world.
					</p>
				</div>
			</section>
		</div>
	)
}
