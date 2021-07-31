/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Link } from 'react-router-dom';
import GetService from '../services/GetService';
import CountryCard from './CountryCard';

const CountryList = () => {
  const { countries } = GetService();
  return (
    <div className="container-fluid mt-5">
      <div className="row app-container">
        {countries.map((data) => (
          // eslint-disable-next-line react/void-dom-elements-no-children

          <div className="country-card" key={data.callingCodes + data.name}>
            <Link to={`/country/${data.alpha3Code}`} className="col-lg-4">
              <CountryCard
                imgSrc={data.flag}
                CountryName={data.name}
                population={data.population}
                region={data.region}
                capital={data.capital}
                demonym={data.demonym}
                subregion={data.subregion}
                area={data.area}
                callingCodes={data.callingCodes}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CountryList;
