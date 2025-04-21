import React from 'react'
import { Text, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation.types';
import { useSelector } from 'react-redux';
import StarRating from '../components/EmployeeStarRating';
import { selectEmployeeById } from '../redux/selectors/employeeSelector';
import EmployeeFeedback from '../components/EmployeeFeedBack';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationHeader from '../components/NavigationHeader';



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
    console.log('EmployeeDetail', employee);
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

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    row: {
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontWeight: '600',
        fontSize: 14,
        color: '#555',
    },
    value: {
        fontSize: 16,
        marginBottom: 5,
        color: '#222',
        alignItems: 'flex-end',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgreen',
        marginTop: 5,
    },
    notFound: {
        fontSize: 16,
        color: 'red',
    },
});

export default EmployeeDetail;