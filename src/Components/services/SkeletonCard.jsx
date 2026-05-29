/* eslint-disable react/no-array-index-key */
import React from 'react';

const SkeletonCard = () => {
  return (
    <article className="service skeleton-card">
      <div className="service__head">
        <div className="skeleton skeleton--heading" />
      </div>
      <ul className="services__list">
        {[...Array(4)].map((_, i) => (
          <li key={i}>
            <span className="skeleton skeleton--icon" />
            <div className="skeleton skeleton--text" />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SkeletonCard;
