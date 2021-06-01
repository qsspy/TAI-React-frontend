import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuantityPicker from './QuantityPicker';

describe('<QuantityPicker />', () => {
  test('it should mount', () => {
    render(<QuantityPicker />);
    
    const quantityPicker = screen.getByTestId('QuantityPicker');

    expect(quantityPicker).toBeInTheDocument();
  });
});