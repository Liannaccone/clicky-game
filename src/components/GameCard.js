import React from "react";

const GameCard = props => (
	<div className="img-container">
		<img src={props.image} alt={props.name} height="250" width="300" />
	</div>
);

export default GameCard;