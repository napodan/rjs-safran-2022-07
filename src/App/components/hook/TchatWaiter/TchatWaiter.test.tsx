import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TchatWaiter from './TchatWaiter';

describe('<TchatWaiter />', () => {
  test('it should mount', () => {
    render(<TchatWaiter />);
    
    const tchatWaiter = screen.getByTestId('TchatWaiter');

    expect(tchatWaiter).toBeInTheDocument();
  });
});