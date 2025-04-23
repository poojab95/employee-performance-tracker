import { StyleSheet } from 'react-native';

export const employeeFeedBackStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        padding: 20,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        backgroundColor: '#fff',
        minHeight: 120,
        marginBottom: 16,
        textAlignVertical: 'top',
    },
    previewLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#555',
    },
    previewText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#444',
    },
});