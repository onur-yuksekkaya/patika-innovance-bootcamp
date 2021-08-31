import React from 'react';
import ApplicationForm from '../components/ApplicationForm';
import Header from '../components/Header';

const ApplicationPage = () => {
  return (
    <div data-testid="appPage">
      <Header />
      <ApplicationForm />
    </div>
  );
};

export default ApplicationPage;
