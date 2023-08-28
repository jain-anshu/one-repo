import { Body } from '../../Body';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Should load Body component', () => {
    render(<Body />);
    const h = screen.getByText('Add a New Ingredient');
    expect(h).toBeInTheDocument();
});