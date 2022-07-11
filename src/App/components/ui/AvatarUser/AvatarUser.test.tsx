import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AvatarUser from './AvatarUser';
import { DUMMY_USER } from '../../../interfaces/IUsers';

describe('<AvatarUser />', () => {
  test('it should mount', () => {
    render(<AvatarUser user={DUMMY_USER} />);
    
    const avatarUser = screen.getByTestId('AvatarUser');

    expect(avatarUser).toBeInTheDocument();
  });
});