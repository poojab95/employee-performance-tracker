export type Employee = {
    id: string;
    timezone: string;
    name: string;
    location: Date;
    project: string;
    title: string;
    department: string;
    imageUrl: string;
    performance: {
        rating: number;
        comments: string[];
    };
};