import React from 'react';
import Scroll from '../components/home/Scroll';

const Home = ({ title }) => {
  return (
    <div className="page">
      {title.map((home) => (
        <div key={home.id}>{home.name}</div>
      ))}
      <Scroll />
    </div>
  );
};

export default Home;
