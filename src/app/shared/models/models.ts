// User Model field
export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
        street: string;
    }
}