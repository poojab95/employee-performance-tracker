import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../../src/components/Header';

describe('Header component', () => {
    it('renders with default styles and title', () => {
        const { getByText } = render(<Header title="CBRE" />);

        const title = getByText('CBRE');
        expect(title).toBeTruthy();
        expect(title.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ color: '#FFFFFF' }),
            ])
        );
    });

    it('renders with custom backgroundColor and textColor', () => {
        const { getByText } = render(
            <Header
                title="Custom Header"
                backgroundColor="#FFD700"
                textColor="#000000"
            />
        );

        const title = getByText('Custom Header');
        expect(title).toBeTruthy();
        expect(title.props.style).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ color: '#000000' }),
            ])
        );
    });
});