/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react';
import AppStatus from '../components/AppStatus';

describe('its should render correctly', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <AppStatus />
      </Router>
    );
  });
  test('render  title', () => {
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });
  test('render  status', () => {
    const input = screen.getByTestId('input');
    expect(input).toBeInTheDocument();
  });
  test('render header name', () => {
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });
  test('not redirect to detail page', async () => {
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(history.location.pathname).not.toBe('/detail/');
  });
  test('should display error when value is not valid', async () => {
    fireEvent.input(screen.getByTestId('input'), {
      target: {
        value: 'random',
      },
    });
    await act(async () => {
      fireEvent.submit(screen.getByTestId('button'));
    });
    expect(history.location.pathname).not.toBe('app-status/random');
  });
});
