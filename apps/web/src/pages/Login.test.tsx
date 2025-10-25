import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Login from './Login';

describe('Login', () => {
  it('renders the login form', () => {
    render(<Login />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
