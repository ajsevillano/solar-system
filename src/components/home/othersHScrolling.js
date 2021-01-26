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
      <div className="scroll_others_container">
        <div className="other_card">
          <img className="scroll_planet" src="./img/moon.png" alt="" />
          <h2>Moons</h2>
        </div>
        <div className="other_card">
          <img className="scroll_planet" src="./img/meteor.png" alt="" />
          <h2>Asteroids</h2>
        </div>
        <div className="other_card">
          <img className="scroll_planet" src="./img/comets.png" alt="" />
          <h2>Comets</h2>
        </div>
      </div>
    </section>
  );
};

export default othersHScrolling;
