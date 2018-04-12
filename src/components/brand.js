import React from 'react'
import './brand.css'
export default function Brand(props) {
	return (
		<div>
			<div className="brand-box">
				<title className="brand-title">{props.title}</title>
			</div>
		</div>
	)
}
