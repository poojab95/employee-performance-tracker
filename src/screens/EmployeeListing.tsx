import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../types/navigation.types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'EmployeeListing'>;

const EmployeeListing = () => {

    const navigate = useNavigation<NavigationProp>();

    const handleButtonClick = () => {
        // Navigate to EmployeeDetail screen
        navigate.navigate('EmployeeDetail', { id: '1' });
    }

    return (
        <>
            <Text>Employee Listing Page</Text>
            <TouchableOpacity onPress={handleButtonClick}>
                <Text>Employee Listing</Text>
            </TouchableOpacity>
        </>
    )
}

export default EmployeeListing;