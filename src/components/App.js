import React, { Component } from "react"
import "./App.css"
import Brand from "./brand"
import Menu from "./menu"
import Gallery from "./gallery"
import projects from "../project.json"
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
		const scrollPosition = e.currentTarget.pageYOffset
		// console.log(scrollPosition)
		this.setState({
			scrollPosition
		})
	}
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll)
	}
	render() {
		const { scrollPosition } = this.state
		const stickyNav =
			scrollPosition > 200 ? (
				<div className="sticky-nav">
					<Menu />
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
						<Menu />
					</section>
				</nav>
				{stickyNav}
				<main className="gallery-container">
					<Gallery
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
			</div>
		)
	}
}

export default App
