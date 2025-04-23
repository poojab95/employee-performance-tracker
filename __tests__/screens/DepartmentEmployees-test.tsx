import React from 'react';
import { render } from '@testing-library/react-native';
import DepartmentEmployees from '../../src/screens/DepartmentEmployees';
import { useRoute } from '@react-navigation/native';

// Mock navigation route
jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useRoute: jest.fn(),
}));

describe('DepartmentEmployees', () => {
    beforeEach(() => {
        // Mock route params
        (useRoute as jest.Mock).mockReturnValue({
            params: {
                department: 'AI Integration',
                employees: [
                    { id: '1', name: 'Alice' },
                    { id: '2', name: 'Bob' },
                    { id: '3', name: 'Charlie' },
                ],
            },
        });
    });

    it('renders department name and list of employees', () => {
        const { getByText } = render(<DepartmentEmployees />);

        // Check department title
        expect(getByText('Department: AI Integration')).toBeTruthy();

        // Check all employee names
        expect(getByText('Alice')).toBeTruthy();
        expect(getByText('Bob')).toBeTruthy();
        expect(getByText('Charlie')).toBeTruthy();
    });
});