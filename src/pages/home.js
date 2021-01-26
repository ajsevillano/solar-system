import React from 'react';
import Planetsscroll from '../components/home/planetsHScrolling';
import Otherssscroll from '../components/home/othersHScrolling';

const Home = ({ planetsData }) => {
  return (
    <div className="scroll_container">
      <Planetsscroll planetsData={planetsData} />
      <Otherssscroll planetsData={planetsData}/>
    </div>
  );
};

export default Home;
