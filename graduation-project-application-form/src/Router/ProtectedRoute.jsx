/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { LoginContext } from '../Context/LoginContext';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const { isLogged } = useContext(LoginContext);
  return (
    <Route
      {...restOfProps}
      render={(props) => (isLogged ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default ProtectedRoute;
