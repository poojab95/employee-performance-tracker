import { StyleSheet } from "react-native";

export const employeeDetailStyles = StyleSheet.create({
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
