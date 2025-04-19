import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation.types';
import EmployeeListing from './src/screens/EmployeeListing';
import EmployeeDetail from './src/screens/EmployeeDetail';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EmployeeListing">
        <Stack.Screen name="EmployeeListing" component={EmployeeListing} />
        <Stack.Screen name="EmployeeDetail" component={EmployeeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
