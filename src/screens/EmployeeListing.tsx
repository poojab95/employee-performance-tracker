import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import { RootStackParamList } from '../types/navigation.types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createMixedCardList } from '../utils/createMixedCardList';
import { MixedCardType } from '../types/employeeDisplay.types';
import { employeeListingStyles as styles } from './styles/employeeListing';
import Header from '../components/Header';
import EmployeeCard from '../components/EmployeeCard';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'EmployeeListing'>;


const EmployeeListing = () => {

    const { navigate } = useNavigation<NavigationProp>();
    const employees = useSelector((state: RootState) => state.employee.employees);
    const mixedCardData = useMemo(() => createMixedCardList(employees), [employees]);


    const renderItem = ({ item }: { item: MixedCardType }) => {
        if (item.type === 'group') {
            return (
                <TouchableOpacity
                    onPress={() =>
                        navigate('DepartmentEmployees', {
                            department: item.department,
                            employees: item.employees,
                        })
                    }
                >
                    <EmployeeCard card={item} />
                </TouchableOpacity>
            );
        }

        if (item.type === 'single') {
            const { employee } = item;
            return (
                <TouchableOpacity
                    onPress={() => navigate('EmployeeDetail', { id: employee.id })}
                >
                    <EmployeeCard card={item} />
                </TouchableOpacity>
            );
        }

        return null;
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title='CBRE' />
            <FlatList data={mixedCardData}
                keyExtractor={(item) =>
                    item.type === 'single'
                        ? `single-${item.employee.id}`
                        : `group-${item.department}`
                }
                renderItem={renderItem}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyData}>
                        No employee data available.
                    </Text>
                )}
            />
        </SafeAreaView>
    )
}

export default EmployeeListing;