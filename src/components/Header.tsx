import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { headerStyles as styles } from './styles/header';

interface HeaderProps {
    title: string;
    backgroundColor?: string;
    textColor?: string;
}

const Header: React.FC<HeaderProps> = ({
    title,
    backgroundColor = '#003F2D',
    textColor = '#FFFFFF',
}) => {
    // Conditionally modify status bar for specific screens
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar
                barStyle={textColor === '#FFFFFF' ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundColor}
                translucent={false}
            />
            <View style={[styles.container, { backgroundColor }]}>
                <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>
                    {title}
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default React.memo(Header);