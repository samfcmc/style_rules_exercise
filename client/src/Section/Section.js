import React, { Component } from 'react';

import './Section.styl';

class Section extends Component {
	render() {
		return (
			<div className="section">
				<div className="section__header">
					<button className="section__button">
						Button
				</button>
					<button className="section__button section__button--danger">
						Danger Button
				</button>
				</div>
				<div className="section__body">
					<span>
						Section's body
					</span>
				</div>
			</div>
		);
	}
}

export default Section;
