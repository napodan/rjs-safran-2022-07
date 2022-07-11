import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThatUsers from './ThatUsers';

describe('<ThatUsers />', () => {
  test('it should mount', () => {
    render(<ThatUsers />);
    
    const thatUsers = screen.getByTestId('ThatUsers');

    expect(thatUsers).toBeInTheDocument();
  });
});