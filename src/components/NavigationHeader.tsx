import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type NavigationHeaderProps = {
    title?: string;
    subtitle?: string;
    backLabel?: string;
    showBack?: boolean;
};

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
    title = '',
    subtitle,
    backLabel = 'Go Back',
    showBack = true,
}) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            {showBack && (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={20} color="#007AFF" />
                    <Text style={styles.backText}>{backLabel}</Text>
                </TouchableOpacity>
            )}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingHorizontal: 16,
        paddingBottom: 10,
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
    },
    backText: {
        marginLeft: 4,
        fontSize: 16,
        color: '#007AFF',
    },
    titleWrapper: {
        flexDirection: 'column',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
    },
    subtitle: {
        fontSize: 13,
        color: '#666',
    },
});

export default NavigationHeader;