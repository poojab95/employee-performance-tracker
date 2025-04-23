import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useDispatch, useSelector } from 'react-redux';
import StarRating from '../../src/components/EmployeeStarRating';
import { updateRating } from '../../src/redux/slices/employeeSlice';

jest.mock('@expo/vector-icons', () => {
    return {
        FontAwesome: jest.fn(() => null),
    };
});

// Mock react-redux
jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe('EmployeeStarRating component', () => {
    const mockDispatch = jest.fn();
    const employeeId = '27';

    beforeEach(() => {
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
        (useSelector as unknown as jest.Mock).mockReturnValue({ performance: { rating: 3 } });
    });

    it('renders 5 stars and component is rendered', () => {
        const { getByTestId } = render(<StarRating id="test-id" />);
        expect(getByTestId('star-1')).toBeTruthy();
        expect(getByTestId('star-2')).toBeTruthy();
        expect(getByTestId('star-3')).toBeTruthy();
        expect(getByTestId('star-4')).toBeTruthy();
        expect(getByTestId('star-5')).toBeTruthy();
    });

    it('dispatches updateRating when a star is pressed', () => {
        const { getByTestId } = render(<StarRating id={employeeId} />);

        fireEvent.press(getByTestId('star-4'));

        expect(mockDispatch).toHaveBeenCalledWith(updateRating({ id: employeeId, rating: 4 }));
    });
});