import React from 'react';
import AdminAppDetail from '../components/AdminAppDetail';
import AdminHeader from '../components/AdminHeader';

const AdminAppDetailPage = () => {
  return (
    <div data-testid="adminDetailPage">
      <AdminHeader />
      <AdminAppDetail />
    </div>
  );
};

export default AdminAppDetailPage;
