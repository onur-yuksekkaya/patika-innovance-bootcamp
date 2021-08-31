/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Successful from '../Pages/Successful';
import { createMemoryHistory } from 'history';

describe('its should render correctly', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <Successful />
      </Router>
    );
  });

  test('its should render application succes page', () => {
    const succesPage = screen.getByTestId('succesPage');
    expect(succesPage).toBeInTheDocument();
  });
});
