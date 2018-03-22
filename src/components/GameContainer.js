import React, { Component } from "react";
import GameCard from "./GameCard";
import gameCards from "../gameCards.json";

export default class GameContainer extends React.Component {
	state = {
		gameCards,
		hasBeenClicked: false
	};

	userClick = id => {
	 	let clickStatus = this.state.hasBeenClicked
		this.setState({
			hasBeenClicked: !clickStatus
		})
	}

	shuffleGameCards = () => {
		// shuffle here
	}

	render() {
		return (
			<div className='container'>
				{this.state.gameCards.map(card => (
					<GameCard
						hasBeenClicked={this.state.hasBeenClicked}
						userClick={this.userClick}
						id={card.id}
						key={card.id}
						name={card.name}
						image={card.image}
					/>
				))}
			</div>
		)
	}
}