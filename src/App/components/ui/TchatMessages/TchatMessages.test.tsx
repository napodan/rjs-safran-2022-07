import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TchatMessages from './TchatMessages';
import { DUMMY_USER } from '../../../interfaces/IUsers';

describe('<TchatMessages />', () => {
  test('it should mount', () => {
    render(<TchatMessages users={[DUMMY_USER]} messages={[{id:0,text:"",dt:"",from:0}]} />);
    
    const tchatMessages = screen.getByTestId('TchatMessages');

    expect(tchatMessages).toBeInTheDocument();
  });
});