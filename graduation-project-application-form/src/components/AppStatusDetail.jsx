import React from 'react';
import atm from '../assets/img/atm.jpg';
import '../styles/status-detail.scss';
import ApplicationDetails from './ApplicationDetails';

const AppStatusDetail = () => {
  return (
    <div className="status">
      <div data-testid="applist" className="app-info">
        <ApplicationDetails />
      </div>
      <img data-testid="img" src={atm} alt="card" />
    </div>
  );
};

export default AppStatusDetail;
