import React from 'react';
import { render } from '@testing-library/react-native';
import { useSelector } from 'react-redux';
import EmployeeDetail from '../../src/screens/EmployeeDetail';
import { useRoute } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
    useRoute: jest.fn(),
}));

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

jest.mock('../../src/components/EmployeeFeedback', () => 'EmployeeFeedback');
jest.mock('../../src/components/EmployeeStarRating', () => 'StarRating');
jest.mock('../../src/components/NavigationHeader', () => 'NavigationHeader');

describe('EmployeeDetail', () => {
    const mockEmployee = {
        id: '101',
        name: 'John Doe',
        title: 'Software Engineer',
        department: 'Engineering',
        timezone: 'PST',
        imageUrl: 'https://example.com/photo.jpg',
        performance: {
            rating: 4,
            comments: ['Great job', 'Excellent team player'],
        },
    };

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
    });

    it('renders employee details correctly', () => {
        const { getByText } = render(<EmployeeDetail />);

        expect(getByText('# Fullname')).toBeTruthy();
        expect(getByText('John Doe')).toBeTruthy();
        expect(getByText('# Title')).toBeTruthy();
        expect(getByText('Software Engineer')).toBeTruthy();
        expect(getByText('# Department')).toBeTruthy();
        expect(getByText('Engineering')).toBeTruthy();
        expect(getByText('# Timezone')).toBeTruthy();
        expect(getByText('PST')).toBeTruthy();
    });
});