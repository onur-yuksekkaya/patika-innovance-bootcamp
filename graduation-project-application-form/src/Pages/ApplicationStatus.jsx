import React from 'react';
import AppStatus from '../components/AppStatus';
import Header from '../components/Header';

const ApplicationStatus = () => {
  return (
    <div data-testid="appStatusPage">
      <Header />
      <AppStatus />
    </div>
  );
};
export default ApplicationStatus;
