import React from 'react'
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation.types';
import { useSelector } from 'react-redux';
import { selectEmployeeById } from '../redux/selectors/employeeSelector';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationHeader from '../components/NavigationHeader';
import { employeeDetailStyles as styles } from './styles/employeeDetail';
import EmployeeFeedback from '../components/EmployeeFeedBack';
import StarRating from '../components/EmployeeStarRating';

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <>
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    </>
);

const EmployeeDetail = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'EmployeeDetail'>>();
    const { id } = route.params;
    const employee = useSelector(selectEmployeeById(id));
    if (!employee) {
        return (
            <View style={styles.container}>
                <Text style={styles.notFound}>Employee not found.</Text>
            </View>
        );
    };

    return (
        <KeyboardAvoidingView enabled={true} behavior="padding" style={{ flex: 1 }}>
            <SafeAreaView>
                <ScrollView>
                    <NavigationHeader title={employee.name} subtitle={employee.department} />
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image}
                                source={{ uri: employee.imageUrl }} />
                        </View>
                        <DetailRow label="# Fullname" value={employee.name} />
                        <View style={styles.separator} />
                        <DetailRow label="# Title" value={employee.title} />
                        <DetailRow label="# Department" value={employee.department} />
                        <DetailRow label="# Timezone" value={employee.timezone} />
                        <View style={styles.separator} />
                        <View style={styles.row}>
                            <Text># Rating </Text>
                            <StarRating
                                id={employee.id}
                                defaultRating={employee.performance.rating}
                            />
                        </View>
                        <View>
                            <EmployeeFeedback id={employee.id} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView >
    );
}

export default EmployeeDetail;