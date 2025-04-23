import { Platform, StatusBar, StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
    safeArea: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Handles safe area for Android status bar
    },
    container: {
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
});