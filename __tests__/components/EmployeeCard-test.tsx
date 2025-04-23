import React from 'react';
import { render } from '@testing-library/react-native';
import EmployeeCard from '../../src/components/EmployeeCard';
import { MixedCardType } from '../../src/types/employeeDisplay.types';

jest.mock('react-native-vector-icons/FontAwesome', () => {
    return () => null;
});

describe('EmployeeCard', () => {
    const singleCard: MixedCardType = {
        type: 'single',
        employee: {
            id: "1",
            timezone: "CST",
            name: "Arjun Rao",
            location: "N Glenville Dr Bldg A, Richardson, TX 75082",
            project: "Integrated Facility Management",
            title: "Energy Analyst",
            department: "IFM Hub",
            imageUrl: "https://avatar.iran.liara.run/public/1",
            performance: {
                rating: 4,
                comments: ["Consistent performance", "Meets deadlines"]
            }
        }
    };

    const groupCard: MixedCardType = {
        type: 'group',
        department: 'SmartFM',
        employees: [
            {
                id: "27",
                timezone: "CST",
                name: "Thiago Mendes",
                location: "N Glenville Dr Bldg A, Richardson, TX 75082",
                project: "Smart Facility Management",
                title: "Operations Coordinator",
                department: "SmartFM",
                imageUrl: "https://avatar.iran.liara.run/public/27",
                performance: {
                    rating: 4,
                    comments: ["Efficient planning", "Good teamwork"]
                }
            },
            {
                id: "28",
                timezone: "CST",
                name: "Nay Chi Win",
                location: "2025-03-26T07:30:00Z",
                project: "Smart Facility Management",
                title: "Safety Consultant",
                department: "SmartFM",
                imageUrl: "https://avatar.iran.liara.run/public/28",
                performance: {
                    rating: 5,
                    comments: ["Excellent compliance management"]
                }
            }
        ]
    };

    it('renders a single employee card correctly', () => {
        const { getByText } = render(<EmployeeCard card={singleCard} />);

        expect(getByText('Arjun Rao - IFM Hub')).toBeTruthy();
        expect(getByText('Full Time Employee')).toBeTruthy();
        expect(getByText('CST timezone')).toBeTruthy();
        expect(getByText('Integrated Facility Management')).toBeTruthy();
        expect(getByText('N Glenville Dr Bldg A, Richardson, TX 75082')).toBeTruthy();
    });

    it('renders a group card correctly', () => {
        const { getByText } = render(<EmployeeCard card={groupCard} />);

        expect(getByText('Group - SmartFM')).toBeTruthy();
        expect(getByText('2 employees')).toBeTruthy();
        expect(getByText('CST timezone')).toBeTruthy();
        expect(getByText('Smart Facility Management')).toBeTruthy();
        expect(getByText('N Glenville Dr Bldg A, Richardson, TX 75082')).toBeTruthy();
    });
});