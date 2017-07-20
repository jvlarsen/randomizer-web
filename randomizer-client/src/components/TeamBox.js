import React from 'react';
import TeamNameInput from './TeamNameInput';
import PlayerNameInput from './PlayerNameInput';

export default class TeamBox extends React.Component {
	render() {
		return (
			<div>
				<TeamNameInput placeholderText={this.props.placeholderText} />
				<PlayerNameInput placeholderText='Enter player names here'/>
			</div>
			);
	}
}