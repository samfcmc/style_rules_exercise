import React, { Component } from 'react';

import './SectionMess.styl';

class SectionMess extends Component {
	render () {
		return (
			<div className="section">
				<div className="header">
					<button>
						Button
					</button>
					<button className="danger">
						Danger Button
					</button>
					<button className="warning">
						Warning Button
					</button>
				</div>
				<div className="body">
					<span>
						Section's body
					</span>
				</div>
			</div>
		);
	}
}

export default SectionMess;