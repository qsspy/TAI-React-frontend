import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryList from './CategoryList';

describe('<CategoryList />', () => {
  test('it should mount', () => {
    render(<CategoryList />);
    
    const categoryList = screen.getByTestId('CategoryList');

    expect(categoryList).toBeInTheDocument();
  });
});