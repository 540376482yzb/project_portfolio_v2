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
			hideHeader: false
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
		const { scrollPosition, hideHeader } = this.state
		const stickyNav =
			scrollPosition > 200 && !hideHeader ? (
				<div className="sticky-nav animated fadeInDown">
					<Menu position={this.scrollPosition} />
				</div>
			) : (
				""
			)
		const project1 = projects[0]
		const project2 = projects[1]
		const project3 = projects[2]
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
				<br />
				<section id="about">
					<About />
				</section>

				<br />
				<main className="gallery-container" id="works">
					<Gallery
						key="0"
						title={project1.title}
						stacks={project1.stacks}
						desc={project1.desc}
						imgUrls={project1.imgUrls}
						links={project1.links}
						hideHeader={() => this.setState({ hideHeader: true })}
						showHeader={() => this.setState({ hideHeader: false })}
					/>
					<Gallery
						key="1"
						title={project2.title}
						stacks={project2.stacks}
						desc={project2.desc}
						imgUrls={project2.imgUrls}
						links={project2.links}
						hideHeader={() => this.setState({ hideHeader: true })}
						showHeader={() => this.setState({ hideHeader: false })}
					/>
					<Gallery
						key="2"
						title={project3.title}
						stacks={project3.stacks}
						desc={project3.desc}
						imgUrls={project3.imgUrls}
						links={project3.links}
						hideHeader={() => this.setState({ hideHeader: true })}
						showHeader={() => this.setState({ hideHeader: false })}
					/>
				</main>

				<section id="contact">
					<br />
					<br />
					<br />
					<br />
					<Footer />
				</section>
			</div>
		)
	}
}

export default App
