import React from 'react';
import LoginProvider from './Context/LoginContext';
import Routers from './Router/Routers';
import './app.scss';

function App() {
  return (
    <LoginProvider>
      <Routers />
    </LoginProvider>
  );
}

export default App;
