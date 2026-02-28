import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "An introductory course on programming and computer science principles.",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        code: "MATH201",
        name: "Calculus II",
        department: "Math",
        description: "Advanced calculus topics including integration and series.",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        code: "ENG102",
        name: "English Literature",
        department: "English",
        description: "A survey of classic English literature from various periods.",
        createdAt: new Date().toISOString()
    }
];