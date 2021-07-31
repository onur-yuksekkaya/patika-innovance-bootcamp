/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => (
  <div className="mt-5">
    <Link to="/" className="back-button" style={{ width: '10rem' }}>
      Go Back
    </Link>

    <div className="row">
      <div className="col-lg-6 flag-full">
        <img src={props.country.flag} alt="flag" />
      </div>
      <div className="col-lg-6 country-details">
        <div className="country-name">{props.country.name}</div>
        <div className="row">
          <div className="col-lg-6">
            <p>
              Demonym: <span>{props.country.demonym}</span>
            </p>
            <p>
              Region: <span>{props.country.region}</span>
            </p>
            <p>
              Subregion: <span>{props.country.subregion}</span>
            </p>
            <p>
              Capital: <span>{props.country.capital}</span>
            </p>
            <p>
              Population:
              <span>{props.country.population}</span>
            </p>
            <p>
              Area: <span>{props.country.area}</span>
            </p>
            <p>
              Code: <span>{props.country.callingCodes}</span>
            </p>
          </div>
          <div className="col-lg-6">
            <p>
              Native Name:
              <span>{props.country.nativeName}</span>
            </p>
            <p>
              Cioc: <span>{props.country.cioc}</span>
            </p>
            <p>
              Time Zones: <span>{props.country.timezones}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Country;
