/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AdminAppDetail from '../components/AdminAppDetail';

describe('its should render correctly', () => {
  beforeEach(() => {
    render(
      <Router>
        <AdminAppDetail />
      </Router>
    );
  });

  test('render button', () => {
    const button = screen.getByTestId('guncelle-button');
    expect(button).toBeInTheDocument();
  });
  test('render input', () => {
    const input = screen.getByTestId('response-input');
    expect(input).toBeInTheDocument();
  });
});
