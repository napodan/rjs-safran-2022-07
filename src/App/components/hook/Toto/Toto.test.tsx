import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toto from './Toto';

describe('<Toto />', () => {
  test('it should mount', () => {
    render(<Toto />);
    
    const toto = screen.getByTestId('Toto');

    expect(toto).toBeInTheDocument();
  });
});