import React from 'react';
import NavButton from './NavButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Button has correct title', () => {
    render(<NavButton title="TEST"/>);
    const button = screen.getByText("TEST");
    expect(button).toBeTruthy;
})