/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStatusDetail from '../components/AppStatusDetail';
import { createMemoryHistory } from 'history';

describe('its should render correctly', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <AppStatusDetail />
      </Router>
    );
  });

  test('its should render  img', () => {
    const img = screen.getByTestId('img');
    expect(img).toBeInTheDocument();
  });
  test('its should render  applist', () => {
    const applist = screen.getByTestId('applist');
    expect(applist).toBeInTheDocument();
  });
});
