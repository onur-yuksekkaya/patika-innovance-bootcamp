import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div data-testid="loginPage">
      <Header />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
