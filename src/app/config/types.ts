export type Login = {
    email: string;
    password: string
}

export type Signup = {
    first_name: string;
    last_name: string;
    email: string;
    password: string
}

export interface User {
    user: {
        age: number;
        _id: string;
        email: string;
        createdAt: Date;
        updatedAt: Date;
        __v: number;
    };
    token: string;
}

