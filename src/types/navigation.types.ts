import { Employee } from "./employee.types";

export type RootStackParamList = {
    EmployeeListing: undefined;
    EmployeeDetail: { id: string };
    DepartmentEmployees: { department: string; employees: Employee[] };
};