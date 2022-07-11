import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TchatMessage from './TchatMessage';

describe('<TchatMessage />', () => {
  test('it should mount', () => {
    render(<TchatMessage message={{id:0,text:'',dt:new Date().toString(), from:0}} user={{id:0, nick:'',fullName:'',img:null,timeLastAction:new Date().toString()}} />);
    
    const tchatMessage = screen.getByTestId('TchatMessage');

    expect(tchatMessage).toBeInTheDocument();
  });
});