import React from "react"
// import Media from 'react-media'
import "./menu.css"
import { ChevronRightIcon } from "mdi-react"

export default class Menu extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)

		this.state = {
			currentFocus: "1"
		}
	}

	handleClick(id, top) {
		window.scrollTo({
			top,
			behavior: "smooth"
		})
	}
	handleScroll(focus) {
		clearTimeout(this.timerId)
		this.timerId = null
		this.timerId = setTimeout(() => {
			if (!this.unmounted) {
				this.setState({
					currentFocus: focus
				})
			}
		}, 100)
	}
	componentWillUnmount() {
		this.unmounted = true
	}
	// componentWillReceiveProps(nextProps) {
	// 	if (this.state.currentFocus !== "1" && nextProps.position < 1200) {
	// 		this.handleScroll("1")
	// 	} else if (
	// 		this.state.currentFocus !== "2" &&
	// 		(nextProps.position < 1700 && nextProps.position >= 1200)
	// 	) {
	// 		this.handleScroll("2")
	// 	} else if (this.state.currentFocus !== "3" && nextProps.position > 1700) {
	// 		this.handleScroll("3")
	// 	}
	// }
	getSnapshotBeforeUpdate(prevProps, prevState) {
		return this.props.position
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.state.currentFocus !== "1" && snapshot < 700) {
			this.handleScroll("1")
		} else if (this.state.currentFocus !== "2" && (snapshot < 2000 && snapshot >= 700)) {
			this.handleScroll("2")
		} else if (this.state.currentFocus !== "3" && snapshot >= 2000) {
			this.handleScroll("3")
		}
	}
	// componentDidMount(){}

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
						onClick={() => this.handleClick("1", 0)}
					>
						{currentFocus === "1" ? renderFocus : ""}
						About
					</li>
					<li
						className={`nav-item  ${currentFocus === "2" ? "focus" : ""} `}
						id="2"
						onClick={() => this.handleClick("2", 1000)}
					>
						{currentFocus === "2" ? renderFocus : ""}
						Works
					</li>
					<li
						className={`nav-item  ${currentFocus === "3" ? "focus" : ""}`}
						id="3"
						onClick={() => this.handleClick("3", 2000)}
					>
						{currentFocus === "3" ? renderFocus : ""} Contact
					</li>
					<li className={"nav-item external-link"}>
						<a href="http://www.github.com/540376482yzb" target="_blank" rel="noopener noreferrer">
							Github Repo
						</a>
					</li>
				</ul>
			</div>
		)
	}
}
