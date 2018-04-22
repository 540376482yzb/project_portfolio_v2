import React from "react"
import "./footer.css"
export default function Footer(props) {
	return (
		<footer className="footer">
			<div className="contact-box">
				<h2>Connect Me On Social Media</h2>
				<a target="_blank" rel="noopener noreferrer" href="http://www.github.com/540376482yzb">
					<img src="images/github.png" className="icon" alt="github" />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/zhy0319">
					<img src="images/linkin.png" className="icon" alt="linkedin" />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://slack.com/">
					<img src="images/slack.png" className="icon" alt="slack" />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/worzzzzzz">
					<img src="images/twitter.png" className="icon" alt="twitter" />
				</a>
				<a target="_blank" rel="noopener noreferrer" href="https://i.imgur.com/eIZ9ANp.png">
					<img src="images/wechat.png" className="icon" alt="we chat" />
				</a>
			</div>
			<div className="contact-box">
				<h2>Let's work together!</h2>
				<a className="contact-btn" href="mailto:zhy0319@gmail.com">
					Connect
				</a>
			</div>
		</footer>
	)
}
