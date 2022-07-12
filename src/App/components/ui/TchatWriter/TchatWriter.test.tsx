import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TchatWriter from './TchatWriter';

describe('<TchatWriter />', () => {
  test('it should mount', () => {
    render(<TchatWriter users={[]} onMesageSent={(e:any)=>{}} />);
    
    const tchatWriter = screen.getByTestId('TchatWriter');

    expect(tchatWriter).toBeInTheDocument();
  });
});