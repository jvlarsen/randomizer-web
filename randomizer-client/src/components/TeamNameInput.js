import React from 'react';

export default class TeamNameInput extends React.Component {
	render() {
		return(
			<input className="input" placeholder={this.props.placeholderText} />
			);
	}
}