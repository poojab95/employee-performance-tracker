import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, TouchableOpacity, FlatList } from 'react-native'
import { RootStackParamList } from '../types/navigation.types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import EmployeeCard from '../components/EmployeeCard';
import { createMixedCardList } from '../utils/createMixedCardList';
import { MixedCardType } from '../types/employeeDisplay.types';
import Header from '../components/Header';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'EmployeeListing'>;


const EmployeeListing = () => {

    const { navigate } = useNavigation<NavigationProp>();
    const employees = useSelector((state: RootState) => state.employee.employees);
    const mixedCardData = useMemo(() => createMixedCardList(employees), [employees]);


    const renderItem = ({ item }: { item: MixedCardType }) => {
        console.log('mixedCardData', mixedCardData);

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

    if (mixedCardData.length === 0) {
        return (
            <Text>
                No employee data available.
            </Text>
        );
    }


    return (
        <>
            <Header title='CBRE' />
            <FlatList data={mixedCardData}
                keyExtractor={(item) =>
                    item.type === 'single'
                        ? `single-${item.employee.id}`
                        : `group-${item.department}`
                }
                renderItem={renderItem}
            />
        </>
    )
}

export default EmployeeListing;