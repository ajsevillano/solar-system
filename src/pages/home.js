import React from 'react';
import Scroll from '../components/home/Scroll';

const Home = ({ planetsData }) => {
  return (
    <div className="page">
      <Scroll planetsData={planetsData} />
    </div>
  );
};

export default Home;
