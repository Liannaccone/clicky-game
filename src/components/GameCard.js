import React from "react";

const GameCard = props => (
	<div className="img-container col-md-3" key={props.key}>
		<img src={props.image} alt={props.name} height="240" width="300" className="img-thumbnail"/>
	</div>
);

export default GameCard;