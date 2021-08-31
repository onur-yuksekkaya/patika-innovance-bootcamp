/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ApplicationForm from '../components/ApplicationForm';

describe('its should render correctly', () => {
  beforeEach(() => {
    render(
      <Router>
        <ApplicationForm />
      </Router>
    );
  });

  test('render  name input', () => {
    const name = screen.getByTestId('name');
    expect(name).toBeInTheDocument();
  });
  test('render  lastname input', () => {
    const lastname = screen.getByTestId('lastname');
    expect(lastname).toBeInTheDocument();
  });
  test('render  age input', () => {
    const age = screen.getByTestId('age');
    expect(age).toBeInTheDocument();
  });
  test('render  address input', () => {
    const address = screen.getByTestId('address');
    expect(address).toBeInTheDocument();
  });
  test('render  address button', () => {
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });
});
