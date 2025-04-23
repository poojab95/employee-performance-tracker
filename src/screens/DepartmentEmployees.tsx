import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { RootStackParamList } from '../types/navigation.types';
import { Employee } from '../types/employee.types';
import { departmentEmployeeStyles as styles } from './styles/departmentEmployees';

const DepartmentEmployees = () => {
    const { params } = useRoute<RouteProp<RootStackParamList, 'DepartmentEmployees'>>();
    const { department, employees } = params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Department: {department}</Text>

            <FlatList
                data={employees}
                keyExtractor={(item: Employee) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.name}>{item.name}</Text>
                )}
            />
        </View>
    )
}

export default DepartmentEmployees;