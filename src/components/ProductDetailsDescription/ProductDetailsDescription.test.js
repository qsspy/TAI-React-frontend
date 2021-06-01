import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetailsDescription from './ProductDetailsDescription';

describe('<ProductDetailsDescription />', () => {
  test('it should mount', () => {
    render(<ProductDetailsDescription />);
    
    const productDetailsDescription = screen.getByTestId('ProductDetailsDescription');

    expect(productDetailsDescription).toBeInTheDocument();
  });
});