import React from 'react';

// Components
import Skeleton from './Skeleton';

const PlanetCard = ({ planetsData }) => {
  //Variables
  let numberOfSquares = 8;
  let skeletonBlock = Array.apply(null, Array(numberOfSquares));

  const HandlePlanetData = () => {
    //Filter and map only the planets
    return planetsData
      .filter((planets) => planets.type === 'planet')
      .map((planetInfo) => (
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
            <h2>Diameter: {planetInfo.diameter}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              magni rerum quo ipsa hic quidem temporibus corporis totam adipisci
              laudantium provident consequuntur quas, error ratione earum facere
              ipsam beatae placeat! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Qui reiciendis repellendus exercitationem iusto
              harum blanditiis, enim laudantium fugiat aspernatur. Velit
              voluptate, officia praesentium sequi magni natus in repellendus
              repellat vitae!
            </p>
          </div>
        </div>
      ));
  };

  return (
    <div>
      {/* If the content haven't been fetch yet... */}
      {!planetsData &&
        skeletonBlock.map((number, index) => <Skeleton key={index} />)}

      {/* When the content is fetch and stored in the state... */}
      {planetsData && HandlePlanetData()}
    </div>
  );
};

export default PlanetCard;
