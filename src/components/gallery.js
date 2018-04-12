import React from "react"
import "./gallery.css"

export default function Project(props) {
	const { title, stacks, desc, imgUrl, links } = props
	const renderChips = stacks.map((stack, index) => {
		return (
			<span key={index} className="gallery-chip">
				{stack}
			</span>
		)
	})

	const renderDesc = desc.map(sentence => {
		return <p>{sentence}</p>
	})
	return (
		<main role="main">
			<section className="body-left">
				<header className="body-left-title">
					<h3>{title}</h3>
				</header>
				<div className="body-left-chips-container">{renderChips}</div>
				<div className="body-left-desc">{renderDesc}</div>
				<div>
					<a href={links[0]} className="body-left-link">
						Live demo
					</a>
					<a href={links[1]} className="body-left-link">
						Code repo
					</a>
				</div>
			</section>
			<section className="body-right">
				<div className="body-right-image-container">
					<img src={imgUrl} alt={title} className="body-right-image" />
				</div>
			</section>
		</main>
	)
}
