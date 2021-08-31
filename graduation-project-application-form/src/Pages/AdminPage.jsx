import React from 'react';
import AdminHeader from '../components/AdminHeader';
import ApplicationList from '../components/ApplicationList';

const AdminPage = () => {
  return (
    <div data-testid="adminPage">
      <AdminHeader />
      <ApplicationList />
    </div>
  );
};

export default AdminPage;
