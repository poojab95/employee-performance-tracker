import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import NavigationHeader from '../../src/components/NavigationHeader';

// Mock the navigation object
jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
}));

// mock vector-icons
jest.mock('@expo/vector-icons', () => {
    return {
        Ionicons: jest.fn(() => null),
    };
});
describe('NavigationHeader', () => {
    const mockGoBack = jest.fn();

    beforeEach(() => {
        (useNavigation as jest.Mock).mockReturnValue({
            goBack: mockGoBack,
        });
    });

    it('renders that title is displayed correctly', () => {
        const { getByText } = render(<NavigationHeader title="Home" />);
        expect(getByText('Home')).toBeTruthy();
    });

    it('renders the subtitle if the value is provided', () => {
        const { getByText } = render(<NavigationHeader title="Home" subtitle="Welcome back" />);
        expect(getByText('Welcome back')).toBeTruthy();
    });

    it('does not render back button when showBack is false', () => {
        const { queryByText } = render(
            <NavigationHeader title="Home" showBack={false} />
        );
        expect(queryByText('Go Back')).toBeNull();
    });

    it('calls navigation.goBack when back button is pressed', () => {
        const { getByText } = render(<NavigationHeader title="Home" />);
        fireEvent.press(getByText('Go Back'));
        expect(mockGoBack).toHaveBeenCalled();
    });

    it('renders custom backLabel if provided', () => {
        const { getByText } = render(
            <NavigationHeader title="Home" backLabel="Return" />
        );
        expect(getByText('Return')).toBeTruthy();
    });
});
