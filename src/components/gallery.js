import React from "react"
import "./gallery.css"
import { GooglePhotosIcon } from "mdi-react"
import { CloseIcon } from "mdi-react"
import { ChevronLeftIcon, ChevronRightIcon } from "mdi-react"
import Dialog from "material-ui/Dialog"
import Media from "react-media"
import SwipeableViews from "react-swipeable-views"
export default class Project extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			slideIndex: 0,
			open: false
		}
		this.handleOpen = this.handleOpen.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleOpen() {
		this.setState({
			open: true
		})
	}
	handleClose() {
		this.setState({
			open: false
		})
	}
	handleChange(value) {
		this.setState({
			slideIndex: value
		})
	}
	handleOnClick(dir) {
		const currentIndex = this.state.slideIndex
		if (dir === "left" && currentIndex > 0) {
			this.setState({
				slideIndex: currentIndex - 1
			})
		}
		if (dir === "right" && currentIndex < 2) {
			this.setState({
				slideIndex: currentIndex + 1
			})
		}
	}
	render() {
		const { title, stacks, desc, imgUrls, links } = this.props
		const { slideIndex, open } = this.state
		if (!this.props.imgUrls) return null
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

		const actions = (
			<div className="control-group fix-bottom">
				<span
					className={` ${
						slideIndex === 0 ? "fade" : ""
					} control-button control-left animated rubberBand`}
					onClick={() => this.handleOnClick("left")}
				>
					<ChevronLeftIcon size={48} color={"#009688"} />
				</span>

				<span
					className={` ${
						slideIndex === 2 ? "fade" : ""
					} control-button control-right animated rubberBand`}
					onClick={() => this.handleOnClick("right")}
				>
					<ChevronRightIcon size={48} color={"#009688"} />
				</span>
				<span className="control-button control-close" onClick={this.handleClose}>
					<CloseIcon size={36} />
				</span>
			</div>
		)

		// console.log("hello", findUrl())
		const renderBigScreenImage = (
			<section className="body-right">
				<div className="body-right-image-container">
					<img
						src={imgUrls[0]}
						alt={title}
						className={`body-right-image ${slideIndex !== 0 ? "hidden" : ""}`}
					/>
					<img
						src={imgUrls[1]}
						alt={title}
						className={`body-right-image ${slideIndex !== 1 ? "hidden" : ""}`}
					/>
					<img
						src={imgUrls[2]}
						alt={title}
						className={`body-right-image ${slideIndex !== 2 ? "hidden" : ""}`}
					/>
				</div>
				{actions}
			</section>
		)

		const renderSmallScreenImag = open ? (
			<Dialog
				contentStyle={{ width: "100%" }}
				paperClassName="dialog"
				modal={true}
				open={open}
				onRequestClose={this.handleClose}
			>
				<div style={{ position: "relative" }}>
					<SwipeableViews index={slideIndex} onChangeIndex={this.handleChange}>
						<img src={imgUrls[0]} alt={title} className="body-right-image" />
						<img src={imgUrls[1]} alt={title} className="body-right-image" />
						<img src={imgUrls[2]} alt={title} className="body-right-image" />
					</SwipeableViews>
					{actions}
				</div>
			</Dialog>
		) : (
			""
		)

		return (
			<main role="main">
				<section className="body-left">
					<header className="body-left-title">
						<h3>{title}</h3>
					</header>
					<div className="body-left-chips-container">{renderChips}</div>
					<div className="body-left-desc">{renderDesc}</div>
					<div className="body-left-link-container">
						<a href={links[0]} target="_blank" rel="noopener noreferrer" className="body-left-link">
							Live demo
						</a>
						<a href={links[1]} target="_blank" rel="noopener noreferrer" className="body-left-link">
							Code repo
						</a>
						<a className="body-left-link play-button" onClick={this.handleOpen}>
							<GooglePhotosIcon size={36} />
						</a>
					</div>
				</section>
				<Media query="(max-width: 799px)">
					{matches => (matches ? renderSmallScreenImag : renderBigScreenImage)}
				</Media>
			</main>
		)
	}
}
