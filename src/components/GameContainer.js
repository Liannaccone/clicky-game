import React from "react";
import GameCard from "./GameCard";
import gameCards from "../gameCards.json";
import './GameContainer.css';

export default class GameContainer extends React.Component {
	state = {
		gameCards,
		counter: 0,
		topScore: 0,
		message: "Click an image to begin!"
	};

	userClick = id => {
		let counter = this.state.counter + 1
		let message = "You guessed correctly!"
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
			message = "You guessed incorrectly!"
			if(this.state.counter > this.state.topScore) {
				this.setState({topScore: this.state.counter});
			}
		}
		gameCards.sort(function(a, b){return 0.5 - Math.random()})
		this.setState({gameCards, counter, message});
	}



	render() {
		// console.log(this.state)
		return (
			<div>
				<header>
					<nav className='navbar'>
						<ul>
							<li className='brand'>
								<h1><strong>Clicky Game</strong></h1>
							</li>
							<li className='message'>
								<h2>{this.state.message}</h2>
							</li>
							<li className="scoreBoard">
								<h2><span> Score: {this.state.counter} | Top Score: {this.state.topScore} </span></h2>
							</li>
						</ul>
					</nav>
				</header>
				<div className="container">
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
			</div>
		)
	}
}