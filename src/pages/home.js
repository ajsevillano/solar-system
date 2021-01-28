import React from 'react';

//Components
import Planetsscroll from '../components/home/planetsScrolling';
import Otherssscroll from '../components/home/othersScrolling';
import Suncard from '../components/home/sun';

const Home = ({ planetsData }) => {
  return (
    <div className="main-container">
      <Planetsscroll planetsData={planetsData} />
      <Suncard />
      <Otherssscroll planetsData={planetsData} />
    </div>
  );
};

export default Home;
