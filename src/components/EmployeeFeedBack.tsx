
import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateComments } from '../redux/slices/employeeSlice';
import { selectEmployeeById } from '../redux/selectors/employeeSelector';
import { employeeFeedBackStyles as styles } from './styles/employeeFeedBack';

interface EmployeeFeedbackProps {
    id: string;
}

const EmployeeFeedback: React.FC<EmployeeFeedbackProps> = ({ id }) => {
    const dispatch = useDispatch();
    const employee = useSelector(selectEmployeeById(id));
    const reduxComments = employee?.performance.comments ?? [];

    const [rawInput, setRawInput] = useState(reduxComments.join('\n'));
    const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setRawInput(reduxComments.join('\n'));
    }, [id]); // Only update on ID change to avoid cursor jumping

    const handleTextChange = (text: string) => {
        setRawInput(text);

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            const newComments = text
                .split('\n')
                .map((line) => line.trim())
                .filter((line) => line.length > 0);

            dispatch(updateComments({ id, comments: newComments }));
        }, 500);
    };

    const formatWithBullets = (text: string) => {
        return text
            .split('\n')
            .map((line) => (line.trim() ? `• ${line.trim()}` : ''))
            .join('\n');
    };

    if (!employee) return null;

    return (
        <KeyboardAvoidingView
            style={styles.wrapper}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.heading}># Feedback</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter feedback (one per line)"
                        multiline
                        textAlignVertical="top"
                        numberOfLines={5}
                        value={rawInput}
                        onChangeText={handleTextChange}
                        autoCorrect={false}
                        autoCapitalize="sentences"
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default EmployeeFeedback;