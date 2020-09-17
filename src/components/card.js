import React from 'react';

function PlanetCard() {
	const Planets = [
		{ id: '1', name: 'Mercury', imgPath: '../img/mercury.png' },
		{ id: '2', name: 'Venus', imgPath: '../img/venus.png' },
		{ id: '3', name: 'Earth', imgPath: '../img/earth.png' },
		{ id: '4', name: 'Mars', imgPath: '../img/mars.png' },
		{ id: '5', name: 'Jupiter', imgPath: '../img/jupiter.png' },
		{ id: '6', name: 'Saturn', imgPath: '../img/saturn.png' },
		{ id: '7', name: 'Uranus', imgPath: '../img/uranus.png' },
		{ id: '8', name: 'Neptune', imgPath: '../img/neptune.png' },
	];

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
