import React, { Component } from "react";
import GameCard from "./GameCard";
import gameCards from "../gameCards.json";

export default class GameContainer extends React.Component {
	state = {
		gameCards,
	};

	userClick = id => {
	 	let clickStatus = this.state.hasBeenClicked
	 	if(!clickstatus) {
			this.setState({hasBeenClicked: !clickStatus})
	 	} else {
	 		endGame();
	 	}
	}

	shuffleGameCards = () => {
		// shuffle here
	}

	render() {
		return (
			<div>
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