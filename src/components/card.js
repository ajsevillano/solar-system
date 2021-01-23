import React, { useState } from 'react';
import { useEffect } from 'react';

// Components
import Skeleton from './Skeleton';

const PlanetCard = () => {
  //State
  const [planetInfo, setPlanetInfo] = useState(null);
  //UseEffect
  useEffect(() => {
    setTimeout(async () => {
      const result = await fetch('./data.json');
      const data = await result.json();
      setPlanetInfo(data);
    }, 500);
  }, []);

  //Variables
  let numberOfSquares = 8;
  let skeletonBlock = Array.apply(null, Array(numberOfSquares));

  return (
    <div>
      {/* If the content haven't been fetch yet... */}
      {!planetInfo &&
        skeletonBlock.map((number, index) => <Skeleton key={index} />)}

      {/* When the content is fetch and stored in the state... */}
      {planetInfo &&
        planetInfo.map((planet) => (
          <div
            className={
              Number(planet.id) === 8
                ? 'card-container last-card'
                : 'card-container'
            }
            key={planet.id}
          >
            <img className="planet" src={planet.imgPath} alt={planet.name} />
            <div className="card">
              <h1>{planet.name}</h1>
              <h2>Diameter: {planet.diameter}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                magni rerum quo ipsa hic quidem temporibus corporis totam
                adipisci laudantium provident consequuntur quas, error ratione
                earum facere ipsam beatae placeat! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Qui reiciendis repellendus
                exercitationem iusto harum blanditiis, enim laudantium fugiat
                aspernatur. Velit voluptate, officia praesentium sequi magni
                natus in repellendus repellat vitae!
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlanetCard;