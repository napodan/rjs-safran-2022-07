import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChatMessages from './ChatMessages';

describe('<ChatMessages />', () => {
  test('it should mount', () => {
    render(<ChatMessages />);
    
    const chatMessages = screen.getByTestId('ChatMessages');

    expect(chatMessages).toBeInTheDocument();
  });
});