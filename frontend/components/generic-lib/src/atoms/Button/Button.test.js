import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button.jsx';
import '@testing-library/jest-dom';

describe('Button test suite', () => {
    test('should render Button', () => {
        render(<Button />);
        const btnElm = screen.getByRole('button');
        expect(btnElm).toBeInTheDocument();
    });

    test('should render Button with label', () => {
        const label = 'Test Button';
        render(<Button label={label} />);
        const btnElm = screen.getByRole('button');
        expect(btnElm).toHaveTextContent(label);
    });

    test('should render Button with primary class', () => {
        render(<Button primary={true} label="Button" />);
        const btnElm = screen.getByRole('button');
        expect(btnElm).toHaveClass('button--primary');
    });

    test('should render Button with secondary class', () => {
        render(<Button primary={false} label="Button" />);
        const btnElm = screen.getByRole('button');
        expect(btnElm).toHaveClass('button--secondary');
    });
});
