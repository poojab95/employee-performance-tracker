import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { navigationHeaderStyles as styles } from './styles/navigationHeader';

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

export default NavigationHeader;