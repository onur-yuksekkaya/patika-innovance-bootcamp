/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Success from '../components/Success';
import { createMemoryHistory } from 'history';

describe('its should render correctly', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <Success />
      </Router>
    );
  });

  test('render  message ', () => {
    const message = screen.getByTestId('message');
    expect(message).toBeInTheDocument();
  });
  test('render  img logo', () => {
    const img = screen.getByTestId('img');
    expect(img).toBeInTheDocument();
  });
});
