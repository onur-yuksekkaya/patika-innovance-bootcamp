import React from 'react';
import AppStatusDetail from '../components/AppStatusDetail';
import Header from '../components/Header';

const AppStatusDetailPage = () => {
  return (
    <div data-testid="appDetailPage">
      <Header />
      <AppStatusDetail />
    </div>
  );
};
export default AppStatusDetailPage;
