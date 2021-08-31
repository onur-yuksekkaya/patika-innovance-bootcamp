/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import ApplicationList from '../components/ApplicationList';

describe('its should render correctly', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <ApplicationList />
      </Router>
    );
  });

  test('render crud  name area', () => {
    const name = screen.getByTestId('name');
    expect(name).toBeInTheDocument();
  });
  test('render crud  lastname area', () => {
    const lastname = screen.getByTestId('lastname');
    expect(lastname).toBeInTheDocument();
  });
  test('render crud  category area', () => {
    const category = screen.getByTestId('category');
    expect(category).toBeInTheDocument();
  });
  test('render crud  status area', () => {
    const status = screen.getByTestId('status');
    expect(status).toBeInTheDocument();
  });
});
