import React, { Component } from "react"
import "./App.css"
import Brand from "./brand"
import Menu from "./menu"
import Gallery from "./gallery"
import projects from "../project.json"
import About from "./about"
import Footer from "./footer"
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			scrollPosition: 0,
			open: false
		}
		this.handleScroll = this.handleScroll.bind(this)
	}
	handleScroll(e) {
		this.scrollPosition = e.currentTarget.pageYOffset
		// console.log(scrollPosition)
		this.timerId = null
		clearTimeout(this.timerId)
		if (this.scrollPosition > 200) {
			this.timerId = setTimeout(() => {
				this.setState({
					scrollPosition: this.scrollPosition
				})
			}, 100)
		} else {
			this.setState({
				scrollPosition: this.scrollPosition
			})
		}
	}
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll)
	}
	render() {
		const { scrollPosition } = this.state
		const stickyNav =
			scrollPosition > 200 ? (
				<div className="sticky-nav animated fadeInDown">
					<Menu position={this.scrollPosition} />
				</div>
			) : (
				""
			)
		const project = projects[0]
		return (
			<div className="App" id="app">
				<nav className="navbar">
					<section className="brand-container">
						<Brand title="Z. Yang" />
					</section>
					<section className="nav-right">
						<Menu position={this.scrollPosition} />
					</section>
				</nav>
				{stickyNav}
				<main className="gallery-container" id="works">
					<Gallery
						key="0"
						title={project.title}
						stacks={project.stacks}
						desc={project.desc}
						imgUrls={project.imgUrls}
						links={project.links}
						open={this.state.open}
						handleOpen={() => this.setState({ open: true })}
						handleClose={() => this.setState({ open: false })}
					/>
					<Gallery
						key="1"
						title={project.title}
						stacks={project.stacks}
						desc={project.desc}
						imgUrls={project.imgUrls}
						links={project.links}
						open={this.state.open}
						handleOpen={() => this.setState({ open: true })}
						handleClose={() => this.setState({ open: false })}
					/>
					<Gallery
						key="2"
						title={project.title}
						stacks={project.stacks}
						desc={project.desc}
						imgUrls={project.imgUrls}
						links={project.links}
						open={this.state.open}
						handleOpen={() => this.setState({ open: true })}
						handleClose={() => this.setState({ open: false })}
					/>
				</main>
				<section id="about">
					<About />
				</section>
				<section id="contact">
					<Footer />
				</section>
			</div>
		)
	}
}

export default App
