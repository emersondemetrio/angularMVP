export interface Person {
	name: string;
	age: number;
	createdAt?: Date;
}

export interface Boss extends Person {
	bonus: number;
}

export interface User {
	username?: string;
	password?: string;
}

export interface AGSServerResponse {
	success: boolean;
	message?: string;
}
