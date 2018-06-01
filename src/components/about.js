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
				<div className="job-title">Software Engineer && Web Developer</div>
				<div className="about-status hirable">
					<span>Status :</span> <MdCheckCircle size={18.67} />
					<span>Hirable</span>
				</div>
				<div className="about-introduction">
		
					<p>
					Hi, I am a Javascript developer in Sacramento,CA. I use the MERN stack to build apps that are secure, reliable and efficient. I love building scalable web applications and learning new technology. 
					</p>
					<p>
						I love repairing and hacking things in life. I have built wooden table and bed-frame for my own bedroom and added DIY motion sensor kit to light up lamp automatically. I used to offer service in my college for fixing crack screens or malfunction parts.
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
