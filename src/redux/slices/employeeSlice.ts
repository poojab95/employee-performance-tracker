import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../../types/employee.types';
import employeeData from '../../mockData/employee.json';

interface EmployeeState {
    employees: Employee[];
}

const initialState: EmployeeState = {
    employees: employeeData,
};

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        updateRating: (state, action: PayloadAction<{ id: string; rating: number }>) => {
            const { id, rating } = action.payload;
            const employee = state.employees.find((emp) => emp.id === id);
            if (employee) {
                employee.performance.rating = rating;
            }
        },
        updateComments: (state, action: PayloadAction<{ id: string; comments: string[] }>) => {
            const { id, comments } = action.payload;
            const employee = state.employees.find((emp) => emp.id === id);
            if (employee) {
                employee.performance.comments = comments;
            }
        },
    },
});

export const { updateRating, updateComments } = employeeSlice.actions;

export default employeeSlice.reducer;