import React from 'react';
import Scroll from '../components/home/Scroll';

const Home = ({ title }) => {
  const HandlePlanetData = () => {
    return title.map((home) => <div key={home.id}>{home.name}</div>);
  };

  return (
    <div className="page">
      {HandlePlanetData()}
      <Scroll />
    </div>
  );
};

export default Home;
