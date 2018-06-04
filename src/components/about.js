import React from "react"
import MdCheckCircle from "react-icons/lib/md/check-circle"
import "./about.css"

export default function About(props) {
	return (
		<div className="about">
			<header className="about-header">
				<div className="avatar-container">
					<img src="images/avatar.png" alt="avatar" className="avatar" />
				</div>
			</header>
			<section className="about-body">
				<div className="job-title">Software Engineer && Web Developer</div>
				<div className="about-status hirable">
					<span>Status :</span> <MdCheckCircle size={18.67} />
					<span>Hirable</span>
				</div>
				<div className="about-introduction">
					<p>
						Hi, I am a Javascript developer in Sacramento,CA. I use the MERN stack to build apps
						that are secure, reliable and efficient. I love building scalable web applications and
						learning new technology.
					</p>
					<p>
						I also love repairing and hacking things offline. I recently built a wooden table and
						bed-frame for myself and added a DIY motion sensor kit to light up my lamp
						automatically. In college, I used to fix cracked screens or malfunction parts on other
						students devices.
					</p>
					<p>
						I am excited to work with a great team to build top-notch products that change lives.
					</p>
				</div>
			</section>
		</div>
	)
}
