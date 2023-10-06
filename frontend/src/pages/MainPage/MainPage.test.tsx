import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPage';

afterEach(jest.clearAllMocks);
describe('Main page test', () => {
    it('should render correctly', () => {
        const rendered = render(<MainPage selectedCategories={[]} />);

        expect(rendered.asFragment()).toMatchSnapshot();
    });
});