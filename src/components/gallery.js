import React from "react"
import "./gallery.css"
export default class Project extends React.Component {
	render() {
		const { title, stacks, desc, imgUrl, links } = this.props
		if (!this.props.imgUrl) return null
		const renderChips = stacks.map((stack, index) => {
			return (
				<span key={index} className="gallery-chip">
					{stack}
				</span>
			)
		})
		const renderDesc = desc.map((sentence, index) => {
			return <p key={index}>{sentence}</p>
		})

		const renderImage = () => {
			return (
				<div className="project-img-container">
					<img src={imgUrl} alt={title} style={{ width: "100%" }} />
				</div>
			)
		}
		return (
			<main role="main">
				{renderImage()}
				<section className="body-left">
					<header className="body-left-title">
						<h3>{title}</h3>
					</header>
					<div className="body-left-desc">{renderDesc}</div>
					<div className="body-left-link-container">
						<a href={links[0]} target="_blank" rel="noopener noreferrer" className="body-left-link">
							Live demo
						</a>
						<a href={links[1]} target="_blank" rel="noopener noreferrer" className="body-left-link">
							Code repo
						</a>
					</div>
					<br />
					<div className="body-left-chips-container">{renderChips}</div>
				</section>
			</main>
		)
	}
}
