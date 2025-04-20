import { Employee } from "./employee.types";

type SingleEmployeeCardType = {
    type: 'single';
    employee: Employee;
};

type GroupEmployeeCardType = {
    type: 'group';
    department: string;
    employees: Employee[];
};

export type MixedCardType = SingleEmployeeCardType | GroupEmployeeCardType;