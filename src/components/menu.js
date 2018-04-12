import React from "react"
// import Media from 'react-media'
import "./menu.css"
import { ChevronRightIcon } from "mdi-react"

export default class Brand extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)

		this.state = {
			currentFocus: "1"
		}
	}

	handleClick(id) {
		this.setState({
			currentFocus: id
		})
	}
	render() {
		const { currentFocus } = this.state
		const renderFocus = (
			<span className="tab-icon-container animated slideInLeft">
				<ChevronRightIcon color="#3949ab" className="tab-icon " size={36} />
			</span>
		)
		return (
			<div className="outer-menu-container">
				<ul className="inner-menu-container">
					<li
						className={`nav-item ${currentFocus === "1" ? "focus" : ""}`}
						id="1"
						onMouseEnter={this.handleMouseEnter}
						onClick={() => this.handleClick("1")}
					>
						{currentFocus === "1" ? renderFocus : ""}
						<a>Works</a>
					</li>
					<li
						className={`nav-item  ${currentFocus === "2" ? "focus" : ""} `}
						id="2"
						onMouseEnter={this.handleMouseEnter}
						onClick={() => this.handleClick("2")}
					>
						{currentFocus === "2" ? renderFocus : ""}
						<a>Skills</a>
					</li>
					<li
						className={`nav-item  ${currentFocus === "3" ? "focus" : ""}`}
						id="3"
						onMouseEnter={this.handleMouseEnter}
						onClick={() => this.handleClick("3")}
					>
						{currentFocus === "3" ? renderFocus : ""} <a>Contact</a>
					</li>
					<li
						className={`nav-item  ${currentFocus === "4" ? "focus" : ""}`}
						id="4"
						onMouseEnter={this.handleMouseEnter}
						onClick={() => this.handleClick("4")}
					>
						{currentFocus === "4" ? renderFocus : ""} <a>Github Repo</a>
					</li>
				</ul>
			</div>
		)
	}
}
