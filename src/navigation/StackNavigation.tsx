import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation.types';
import EmployeeListing from '../screens/EmployeeListing';
import EmployeeDetail from '../screens/EmployeeDetail';
import DepartmentEmployees from '../screens/DepartmentEmployees';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator id={undefined} initialRouteName="EmployeeListing">
                <Stack.Screen name="EmployeeListing" component={EmployeeListing} />
                <Stack.Screen name="EmployeeDetail" component={EmployeeDetail} />
                <Stack.Screen name="DepartmentEmployees" component={DepartmentEmployees} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;