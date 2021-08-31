/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import LoginForm from '../components/LoginForm';
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
          <LoginForm />
        </Router>
      </LoginContext.Provider>
    );
  });

  test('render  status', () => {
    const username = screen.getByTestId('input-username');
    expect(username).toBeInTheDocument();
  });
  test('render header name', () => {
    const password = screen.getByTestId('input-password');
    expect(password).toBeInTheDocument();
  });
  test('render header name', () => {
    const password = screen.getByTestId('login-button');
    expect(password).toBeInTheDocument();
  });

  test('not redirect to admin page', async () => {
    const loginButton = screen.getByTestId('login-button');
    fireEvent.click(loginButton);
    expect(history.location.pathname).not.toBe('/admin');
  });

  test('should not display error when value is valid', async () => {
    fireEvent.input(screen.getByTestId('input-username'), {
      target: {
        value: 'kodluyoruz',
      },
    });
    fireEvent.input(screen.getByTestId('input-password'), {
      target: {
        value: 'bootcamp109',
      },
    });

    await act(async () => {
      fireEvent.submit(screen.getByTestId('login-button'));
    });

    expect(mockLogin).toBeCalledWith({ username: 'kodluyoruz', password: 'bootcamp109' });
    expect(history.location.pathname).toBe('/');
  });
});
