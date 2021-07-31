import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import GetService from './services/GetService';
import Country from './components/Country';
import CountryList from './components/CountryList';
import ToptenList from './components/ToptenList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { countries } = GetService();

  return (
    <>
      <Router>
        <div className="d-flex top-bar">
          <NavLink
            exact
            to="/"
            activeClassName="selected"
            className="top-back-button"
          >
            Country List
          </NavLink>

          <NavLink
            exact
            to="/topten"
            activeClassName="selected"
            className="top-back-button"
          >
            Top 10 Language List
          </NavLink>
        </div>
        <Route exact path="/" component={CountryList} />
        <Route exact path="/topten" component={ToptenList} />
        <Route
          path="/country/:code"
          render={(renderProps) => {
            const country = countries.find(
              // eslint-disable-next-line no-shadow
              (country) => country.alpha3Code === renderProps.match.params.code
            );
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <Country {...renderProps} country={country} />;
          }}
        />
      </Router>
    </>
  );
};

export default App;
