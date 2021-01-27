import React from 'react';

//Import skeleton component

const planetsHScrolling = ({ planetsData }) => {
  console.log(planetsData);
  const HandlePlanetData = () => {
    //Filter and map only the planets
    return planetsData
      .filter((planets) => planets.type === 'planet')
      .map((planetInfo) => (
        <div className="scroll_card" key={planetInfo.id}>
          <img className="scroll_planet" src={planetInfo.imgPath} alt="" />
          <h2>{planetInfo.name}</h2>
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
      {/* load a preload skeleton meanwhile the data is fetch */}
      {!planetsData ? (
        <h1>Loading...</h1>
      ) : (
        <div className="scroll_cards_container">{HandlePlanetData()}</div>
      )}
    </section>
  );
};

export default planetsHScrolling;
