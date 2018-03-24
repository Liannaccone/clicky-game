import React from "react";



const GameCard = props => (
	<div style={{margin: 15}} onClick={() => props.userClick(props.id)} className="img-container col-md-3" key={props.key}>
		<img src={props.image} alt={props.name} height="200" width="260" className="img-rounded"/>
	</div>
);

export default GameCard;