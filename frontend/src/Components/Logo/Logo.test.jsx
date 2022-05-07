import React from 'react';
import Logo from './Logo';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('Logo renders with correct image', () => {
    render(<Logo/>);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'cube.png');
    expect(image).toHaveAttribute('alt', 'cube');
})

test('Logo renders "The" correctly', () => {
    render(<Logo/>);
    const text = screen.getByText('The');
    expect(text).toBeTruthy;
})

test('Logo renders "Holocron." correctly', () => {
    render(<Logo/>);
    const text = screen.getByText('Holocron.');
    expect(text).toBeTruthy;
})