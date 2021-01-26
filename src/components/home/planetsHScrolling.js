import React from 'react';
const planetsHScrolling = ({ planetsData }) => {
  const HandlePlanetData = () => {
    //Filter only the planets
    let PlanetsFilter = planetsData.filter(
      (planets) => planets.type === 'planet'
    );

    //Create the card with the Planet information from the filter
    return PlanetsFilter.map((planetCard) => (
      <div className="scroll_card" key={planetCard.id}>
        <img className="scroll_planet" src={planetCard.imgPath} alt="" />
        <h2>{planetCard.name}</h2>
      </div>
    ));
  };

  return (
    <section id="planets">
      <h1>The planets</h1>
      <div className="subheaders">
        <h3>The 8 planets </h3>
        <p>SEE ALL</p>
      </div>
      <div className="scroll_cards_container">{HandlePlanetData()}</div>
    </section>
  );
};

export default planetsHScrolling;
