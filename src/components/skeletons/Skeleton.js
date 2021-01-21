import React from 'react';
import './Skeleton.scss';
const Skeleton = (planet) => {
  return (
    <div
      className={
        Number(planet.id) === 8 ? 'card-container last-card' : 'card-container'
      }
      key={planet.id}
    >
      <div className="card-skeleton">
        <div className="img-skeleton"></div>
        <div className="h1-skeleton"></div>
        <div className="h2-skeleton"></div>
        <div className="p-skeleton"></div>
        <div className="p-skeleton"></div>
        <div className="p-skeleton"></div>
        <div className="p-skeleton"></div>
      </div>
    </div>
  );
};

export default Skeleton;
