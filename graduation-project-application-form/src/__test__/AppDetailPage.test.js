/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppDetailPage from '../Pages/AppDetailPage';
import { createMemoryHistory } from 'history';
import { LoginContext } from '../Context/LoginContext';

const mockLogin = jest.fn();

const mockValue = {
  login: mockLogin,
};

describe('its should render correctly', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <LoginContext.Provider value={mockValue}>
        <Router history={history}>
          <AppDetailPage />
        </Router>
      </LoginContext.Provider>
    );
  });

  test('its should render  Application Detail Page', () => {
    const appDetailPage = screen.getByTestId('appDetailPage');
    expect(appDetailPage).toBeInTheDocument();
  });
});
