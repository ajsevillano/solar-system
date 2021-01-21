import React from 'react';
import './Skeleton.scss';
const Skeleton = () => {
  return (
    <div className="card-container">
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
