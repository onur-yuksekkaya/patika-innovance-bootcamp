import React from 'react';

const CountryCard = (props) => {
  const { imgSrc, CountryName, population, region, demonym, capital } = props;
  return (
    <div>
      <div className="img-container">
        <img src={imgSrc} alt="country-flag" />
      </div>
      <div className="country-card-body my-auto">
        <h2>{CountryName}</h2>
        <p>
          Demonym: <span>{demonym}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Population: <span>{population}</span>
        </p>
        <p className="pb-3">
          Capital: <span>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
