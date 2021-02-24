import React, { FC } from 'react';

import { IProps } from './types';
import './styles.css';

const CardMovie: FC<IProps> = ({ title, overview, posterPath }: IProps) => {
  return (
    <div className="container-card">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={`This is a poster of ${title}`}
      />
      <div className="container-text">
        <h1 className="title">{title}</h1>
        <p className="overview">{overview}</p>
      </div>
    </div>
  );
};

export default CardMovie;
