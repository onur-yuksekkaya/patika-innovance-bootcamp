/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import ApplicationDetails from '../components/ApplicationDetails';

describe('its should render correctly', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <ApplicationDetails />
      </Router>
    );
  });

  test('render  status text', () => {
    const titlelement = screen.getByTestId('status');
    expect(titlelement).toBeInTheDocument();
  });
  test('render header name text', () => {
    const name = screen.getByTestId('name');
    expect(name).toBeInTheDocument();
  });
});
