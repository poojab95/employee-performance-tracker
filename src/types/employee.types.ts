export type Employee = {
    id: string;
    timezone: string;
    name: string;
    location: string;
    project: string;
    title: string;
    department: string;
    imageUrl: string;
    performance: {
        rating: number;
        comments: string[];
    };
};