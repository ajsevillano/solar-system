import React from 'react';
import Planetsscroll from '../components/home/planetsHScrolling';

const Home = ({ planetsData }) => {
  return (
    <div className="scroll_container">
      <Planetsscroll planetsData={planetsData} />
    </div>
  );
};

export default Home;
