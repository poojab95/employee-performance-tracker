
import { StyleSheet } from 'react-native';

export const employeeCardStyles = StyleSheet.create({
    cardOuterContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    cardSubtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardTimeZoneTile:
    {
        borderRadius: 3,
        padding: 5,
        backgroundColor: '#d4f1f4',
        width: '40%'
    },
    cardDescription: {
        fontSize: 13,
        fontWeight: 'bold',
        margin: 5,
    },
    cardLocation: {
        fontSize: 14,
        color: 'gray',
        margin: 5, padding: 5,
    }
});
