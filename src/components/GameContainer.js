import React from "react";
import GameCard from "./GameCard";
import gameCards from "../gameCards.json";

export default class GameContainer extends React.Component {
	state = {
		gameCards,
		counter: 0,
		topScore: 0
	};

	userClick = id => {
		let counter = this.state.counter + 1
		let shouldGameEnd = false
	 	let gameCards = this.state.gameCards.map(gameCard => {
	 		if (gameCard.id === id) {
	 			if(gameCard.hasBeenClicked) {
	 				shouldGameEnd = true
	 			}
	 			return {...gameCard, hasBeenClicked: true};
	 		}
	 		return gameCard;
		});
		if(shouldGameEnd) {
			gameCards = this.state.gameCards.map(gameCard => ({...gameCard, hasBeenClicked: false}));
			counter = 0;
			if(this.state.counter > this.state.topScore) {
				this.setState({topScore: this.state.counter});
			}
		}
		this.setState({gameCards, counter});
	}

	shuffleGameCards = () => {
		this.setState
	}

	render() {
		// console.log(this.state)
		return (
			<div>
				{this.state.gameCards.map(gameCard => (
					<GameCard
						hasBeenClicked={gameCard.hasBeenClicked}
						userClick={this.userClick}
						id={gameCard.id}
						key={gameCard.id}
						name={gameCard.name}
						image={gameCard.image}
					/>
				))}
			</div>
		)
	}
}