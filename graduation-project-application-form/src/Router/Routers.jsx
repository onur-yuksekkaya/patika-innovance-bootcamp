import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApplicationPage from '../Pages/ApplicationPage';
import LoginPage from '../Pages/LoginPage';
import MainPage from '../Pages/MainPage';
import Successful from '../Pages/Successful';
import ApplicationStatus from '../Pages/ApplicationStatus';
import AppStatusDetailPage from '../Pages/AppDetailPage';
import AdminPage from '../Pages/AdminPage';
import AdminAppDetailPage from '../Pages/AdminAppDetailPage';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/application">
            <ApplicationPage />
          </Route>
          <Route exact path="/basvuru-basarili/:id">
            <Successful />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/app-status">
            <ApplicationStatus />
          </Route>
          <Route exact path="/app-status/:id">
            <AppStatusDetailPage />
          </Route>
          <ProtectedRoute exact path="/admin" component={AdminPage} />
          <ProtectedRoute exact path="/admin/basvuru/:id" component={AdminAppDetailPage} />
        </Switch>
      </Router>
    </>
  );
};

export default Routers;
