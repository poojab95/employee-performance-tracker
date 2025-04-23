import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeFeedback from '../../src/components/EmployeeFeedback';


jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

describe('EmployeeFeedback', () => {
    const mockDispatch = jest.fn();

    const mockEmployee = {
        id: '31',
        timezone: 'CST',
        name: 'Christopher Hall',
        location: '2025-03-26T13:00:00Z',
        project: 'Integrated Facility Management',
        title: 'System Simulation Expert',
        department: 'IFM Hub',
        imageUrl: 'https://avatar.iran.liara.run/public/31',
        performance: {
            rating: 5,
            comments: ['Advanced modeling', 'Very innovative'],
        },
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    });

    it('renders correctly with employee data', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue(mockEmployee);

        const { getByPlaceholderText } = render(<EmployeeFeedback id="31" />);
        expect(getByPlaceholderText('Enter feedback (one per line)')).toBeTruthy();
    });

    it('pre-fills input with joined comments', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue(mockEmployee);

        const { getByDisplayValue } = render(<EmployeeFeedback id="31" />);
        expect(getByDisplayValue('Advanced modeling\nVery innovative')).toBeTruthy();
    });

    it('dispatches updateComments after debounce', () => {
        jest.useFakeTimers();
        (useSelector as unknown as jest.Mock).mockReturnValue(mockEmployee);

        const { getByPlaceholderText } = render(<EmployeeFeedback id="31" />);
        const input = getByPlaceholderText('Enter feedback (one per line)');

        fireEvent.changeText(input, 'Updated comment\nAnother one');

        act(() => {
            jest.advanceTimersByTime(500);
        });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'employee/updateComments',
            payload: {
                id: '31',
                comments: ['Updated comment', 'Another one'],
            },
        });

        jest.useRealTimers();
    });

    it('returns null when employee is not found', () => {
        (useSelector as unknown as jest.Mock).mockReturnValue(undefined);

        const { toJSON } = render(<EmployeeFeedback id="31" />);
        expect(toJSON()).toBeNull();
    });
});
