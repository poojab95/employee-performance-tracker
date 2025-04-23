import React from 'react'
import { Text, View } from 'react-native'
import { MixedCardType } from '../types/employeeDisplay.types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { employeeCardStyles as styles } from './styles/employeeCard';

const EmployeeCard = ({ card }: { card: MixedCardType }) => {
    const isGroupCard = card.type === 'group';
    const name = isGroupCard ? `Group - ${card.department}` : `${card.employee.name} - ${card.employee.department}`;
    const icon = isGroupCard ? 'users' : 'user';
    const description = isGroupCard
        ? `${card.employees.length} employees`
        : 'Full Time Employee';

    const representative = isGroupCard ? card.employees[0] : card.employee;
    return (
        <View style={styles.cardOuterContainer}>
            <Text style={styles.cardTitle}>{name}</Text>

            <View style={styles.cardSubtitleContainer}>
                <Icon name={icon} size={20} color="#4F8EF7" />
                <Text style={styles.cardDescription}>{description}</Text>
            </View>

            <Text style={styles.cardTimeZoneTile}>
                {representative.timezone} timezone
            </Text>
            <Text style={styles.cardDescription}>{representative.project}</Text>
            <Text>{representative.location}</Text>
        </View>
    )
}

export default EmployeeCard;