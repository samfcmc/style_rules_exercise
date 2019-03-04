import React, { Component } from 'react';

import './App.styl';
// import Section from '../Section/Section';
import SectionMess from '../SectionMess/SectionMess';

class App extends Component {
	render() {
		return (
			<div className="app">
				<SectionMess />
			</div>
		);
	}
}

export default App;
