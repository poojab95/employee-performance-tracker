import { RootState } from '../store'; // Adjust path as needed

export const selectEmployeeById = (id: string) => (state: RootState) =>
    state.employee.employees.find(emp => emp.id === id);