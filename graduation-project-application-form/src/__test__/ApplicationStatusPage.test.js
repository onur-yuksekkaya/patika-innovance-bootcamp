/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationStatus from '../Pages/ApplicationStatus';
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
          <ApplicationStatus />
        </Router>
      </LoginContext.Provider>
    );
  });

  test('its should render  Admin Application  Page', () => {
    const appStatusPage = screen.getByTestId('appStatusPage');
    expect(appStatusPage).toBeInTheDocument();
  });
});
