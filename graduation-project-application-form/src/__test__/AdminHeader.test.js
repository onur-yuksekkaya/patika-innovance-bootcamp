/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AdminHeader from '../components/AdminHeader';
import { createMemoryHistory } from 'history';
import { LoginContext } from '../Context/LoginContext';

const mockLogin = jest.fn();
const mockLogout = jest.fn();
const mockValue = {
  setIsLoading: jest.fn(),
  login: mockLogin,
  logout: mockLogout,
};

describe('its should render correctly', () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <LoginContext.Provider value={mockValue}>
        <Router>
          <AdminHeader />
        </Router>
      </LoginContext.Provider>
    );
  });

  test('render  cikis yap button', () => {
    const exitButton = screen.getByTestId('cikis-yap');
    expect(exitButton).toBeInTheDocument();
  });
  test('render  basvurular button', () => {
    const basvurular = screen.getByTestId('basvurular');
    expect(basvurular).toBeInTheDocument();
  });
  test('render  img logo', () => {
    const img = screen.getByTestId('img');
    expect(img).toBeInTheDocument();
  });
  test('redirect to home page', async () => {
    const exitButton = screen.getByTestId('cikis-yap');
    fireEvent.click(exitButton);
    expect(history.location.pathname).toBe('/');
  });
});
