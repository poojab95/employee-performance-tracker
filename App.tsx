import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation.types';
import EmployeeListing from './src/screens/EmployeeListing';
import EmployeeDetail from './src/screens/EmployeeDetail';
import { store } from './src/store';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator id={undefined} initialRouteName="EmployeeListing">
          <Stack.Screen name="EmployeeListing" component={EmployeeListing} />
          <Stack.Screen name="EmployeeDetail" component={EmployeeDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
