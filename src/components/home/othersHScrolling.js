import React from 'react';
const othersHScrolling = ({ planetsData }) => {
  //Create the card with the Planet information passed in the prop
  const HandlePlanetData = () => {
    return planetsData.map((planetCard) => (
      <div className="scroll_card" key={planetCard.id}>
        <img className="scroll_planet" src={planetCard.imgPath} alt="" />
        <h2>{planetCard.name}</h2>
      </div>
    ));
  };

  return (
  <section id="others">
      <h1>Others</h1>

      <div className="subheaders">
        <h3>Another objects in the solar system</h3>
        <p>SEE ALL</p>
      </div>
      <div className="scroll_cards_container">
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/mercury.png" alt="" />
          <h2>Moons</h2>
        </div>
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/venus.png" alt="" />
          <h2>Asteroids</h2>
        </div>
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/earth.png" alt="" />
          <h2>Comets</h2>
        </div>
      </div>
</section>
  );
};

export default othersHScrolling;
