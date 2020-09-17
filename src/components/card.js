import React from 'react';

function PlanetCard() {
	const Planets = [
		['Mars', '../img/mars.png'],
		['Earth', '../img/earth.png'],
		['Venus', '../img/earth.png'],
		['Saturn', '../img/saturn.png'],
	];
	const planetsNamesList = Planets.map(function (name) {
		const ImgPlanet = <img className="planet" src={name[1]} alt={name[0]} />;
		return (
			<div className="card-container">
				{ImgPlanet}
				<div className="card">
					<h1>{name[0]}</h1>
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

	return <div>{planetsNamesList}</div>;
}

export default PlanetCard;
