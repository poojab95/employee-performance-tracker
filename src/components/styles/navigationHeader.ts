import { StyleSheet } from "react-native";


export const navigationHeaderStyles = StyleSheet.create({
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