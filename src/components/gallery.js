import React from "react"
import { Link } from "react-router-dom"
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
						<Link to={links[0]} target="_blank" className="body-left-link">
							<button>Demo </button>
						</Link>
						<Link to={links[1]} target="_blank" className="body-left-link">
							<button>Code repo</button>
						</Link>
					</div>
					<br />
					<div className="body-left-chips-container">{renderChips}</div>
				</section>
			</main>
		)
	}
}
