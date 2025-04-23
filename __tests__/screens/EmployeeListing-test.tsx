import React from 'react';
import { render } from '@testing-library/react-native';
import EmployeeListing from '../../src/screens/EmployeeListing';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
    useRoute: jest.fn(),
    useNavigation: jest.fn(),
}));

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

jest.mock('../../src/components/EmployeeCard', () => 'EmployeeCard');
jest.mock('../../src/components/EmployeeFeedback', () => 'EmployeeFeedback');
jest.mock('../../src/components/EmployeeStarRating', () => 'StarRating');
jest.mock('../../src/components/NavigationHeader', () => 'NavigationHeader');

const mockEmployee = {
    id: '101',
    name: 'John Doe',
    title: 'Software Engineer',
    department: 'Smart FM',
    timezone: 'PST',
    imageUrl: 'https://example.com/photo.jpg',
    performance: {
        rating: 4,
        comments: ['Great job', 'Excellent team player'],
    },
};

describe('EmployeeListing', () => {
    beforeEach(() => {
        (useRoute as jest.Mock).mockReturnValue({
            params: { id: '101' },
        });

        (useSelector as unknown as jest.Mock).mockImplementation((selectorFn: any) =>
            selectorFn({
                employee: {
                    employees: [mockEmployee],
                },
            })
        );
        (useNavigation as jest.Mock).mockReturnValue({
            navigate: jest.fn(),
        });
    });

    it('renders employee details correctly', () => {
        const { getByText } = render(<EmployeeListing />);

        // Test for CBRE title
        expect(getByText('CBRE')).toBeTruthy();
    });
});