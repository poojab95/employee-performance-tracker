import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { updateRating } from '../redux/slices/employeeSlice';

type RatingProps = {
    maxStars?: number;
    id: string;
    defaultRating?: number;
    onRatingChange?: (rating: number) => void;
};

const StarRating = ({ id, maxStars = 5 }: RatingProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const rating = useSelector((state: RootState) => {
        const employee = state.employee.employees.find((emp: { id: string }) => emp.id === id);
        return employee?.performance.rating ?? 0;
    });

    const handlePress = (star: number) => {
        dispatch(updateRating({ id, rating: star }));
    };

    return (
        <View style={styles.container}>
            {Array.from({ length: maxStars }, (_, index) => {
                const starNumber = index + 1;
                return (
                    <TouchableOpacity
                        key={starNumber}
                        onPress={() => handlePress(starNumber)}
                    >
                        <FontAwesome
                            name={starNumber <= rating ? 'star' : 'star-o'}
                            size={30}
                            color={starNumber <= rating ? '#FFD700' : '#ccc'}
                            style={styles.star}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    star: {
        marginHorizontal: 4,
    },
});

export default StarRating;