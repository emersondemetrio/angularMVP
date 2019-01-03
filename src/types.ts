export interface Person {
	name: string;
	age: number;
	createdAt?: Date;
}

export interface Boss extends Person {
	bonus: number;
}
