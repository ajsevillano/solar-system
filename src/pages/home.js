import React from 'react';
import Planetsscroll from '../components/home/planetsHScrolling';
import Otherssscroll from '../components/home/othersHScrolling';
import Suncard from '../components/home/sun';

const Home = ({ planetsData }) => {
  return (
    <div className="scroll_container">
      <Planetsscroll planetsData={planetsData} />
      <Suncard />
      <Otherssscroll planetsData={planetsData} />
    </div>
  );
};

export default Home;
