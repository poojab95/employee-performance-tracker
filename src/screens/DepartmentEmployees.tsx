import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { RootStackParamList } from '../types/navigation.types';
import { Employee } from '../types/employee.types';

const DepartmentEmployees = () => {
    const { params } = useRoute<RouteProp<RootStackParamList, 'DepartmentEmployees'>>();
    console.log('params', params);
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        backgroundColor: '#003F2D',
        color: '#fff',
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
    },
});


export default DepartmentEmployees;