import React from 'react';
const Scroll = () => {
  return (
    <div className="scroll_container">
      <h1>The planets</h1>

      <div className="subheaders">
        <h3>The 8 planets </h3>
        <p>SEE ALL</p>
      </div>
      <div className="scroll_cards_container">
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/mercury.png" alt="" />
          <h2>Mercury</h2>
        </div>
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/venus.png" alt="" />
          <h2>Venus</h2>
        </div>
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/earth.png" alt="" />
          <h2>Earth</h2>
        </div>
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/mars.png" alt="" />
          <h2>Mars</h2>
        </div>
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/jupiter.png" alt="" />
          <h2>Jupiter</h2>
        </div>
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/saturn.png" alt="" />
          <h2>Saturn</h2>
        </div>
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/uranus.png" alt="" />
          <h2>Uranus</h2>
        </div>
        <div className="scroll_card">
          <img className="scroll_planet" src="./img/neptune.png" alt="" />
          <h2>Neptune</h2>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
