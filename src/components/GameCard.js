import React from "react";



const GameCard = props => (
	<div style={{margin: 15}} onClick={() => props.userClick(props.id)} className="img-container col-md-3" key={props.key}>
		<img src={props.image} alt={props.name} height="240" width="300" className="img-rounded"/>
		{props.hasBeenClicked && (<div>heyooooo</div>)}
	</div>
);

export default GameCard;