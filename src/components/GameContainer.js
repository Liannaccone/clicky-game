wimport React, { Component } from "react";
import GameCard from "./GameCard";

export default class GameContainer extends React.Component {
	state = {
		hasBeenClicked: false
	};

	userClick = () => {
	 	let clickStatus = this.state.hasBeenClicked
		this.setState({
			hasBeenClicked: !clickStatus
		})
	}

	shuffleGameCards = () => {
		// shuffle here
	}



}