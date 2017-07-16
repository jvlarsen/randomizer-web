import React from 'react';
import '../static/randomizer.css';

export default class Input extends React.Component {
	render() {
		return(
			<input className="input" placeholder={this.props.placeholderText}/>
			);
	}
}