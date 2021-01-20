import React from 'react';
import './card.css';
import Planets from '../../planets.json';

function PlanetCard() {
	return Planets.map((planetInfo) => {
		return (
			<div
				className={
					Number(planetInfo.id) === 8
						? 'card-container last-card'
						: 'card-container'
				}
				key={planetInfo.id}
			>
				<img
					className="planet"
					src={planetInfo.imgPath}
					alt={planetInfo.name}
				/>
				<div className="card">
					<h1>{planetInfo.name}</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni
						rerum quo ipsa hic quidem temporibus corporis totam adipisci
						laudantium provident consequuntur quas, error ratione earum facere
						ipsam beatae placeat! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Qui reiciendis repellendus exercitationem iusto
						harum blanditiis, enim laudantium fugiat aspernatur. Velit
						voluptate, officia praesentium sequi magni natus in repellendus
						repellat vitae!
					</p>
				</div>
			</div>
		);
	});
}

export default PlanetCard;
