import React from 'react';
import '../static/randomizer.css';
import Connector from '../helpers/Connector';

export default class RandomizerButton extends React.Component {
	render() {
		return(
			<button className="randomizerButton" onClick={() => Connector.countClicks()}>
				Randomize
			</button>
			);
	}

	randomize() {
		console.log('Written in component file. Not cool. Should be using Connector');
	}

}