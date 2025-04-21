
import { Employee } from '../types/employee.types';
import { MixedCardType } from '../types/employeeDisplay.types';

const TARGET_DEPARTMENTS = ['SmartFM', 'AI Integration'];

export const createMixedCardList = (employees: Employee[]): MixedCardType[] => {
    const grouped: Record<string, Employee[]> = {};
    const singleCards: MixedCardType[] = [];
    const groupCards: MixedCardType[] = [];

    // Categerize employees into group and single cards
    employees.forEach(emp => {
        if (TARGET_DEPARTMENTS.includes(emp.department)) {
            if (!grouped[emp.department]) {
                grouped[emp.department] = [];
            }
            grouped[emp.department].push(emp);
        } else {
            singleCards.push({
                type: 'single',
                employee: emp,
            });
        }
    });

    // Convert grouped employees into group cards
    Object.entries(grouped).forEach(([department, employees]) => {
        groupCards.push({
            type: 'group',
            department,
            employees,
        });
    });


    return [...groupCards, ...singleCards];
};