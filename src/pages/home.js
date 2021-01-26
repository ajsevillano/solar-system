import React from 'react';
import Scroll from '../components/home/Scroll';

const Home = ({ planetsData }) => {
  return (
    <div className="scroll_container">
      <Scroll planetsData={planetsData} />
    </div>
  );
};

export default Home;
