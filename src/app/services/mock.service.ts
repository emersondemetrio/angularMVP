import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from 'src/types';
import { people } from './MOCK';

@Injectable({
	providedIn: 'root'
})
export class MockService {

	constructor() { }

	public list(): Observable<Person[]> {

		return of(people);
	}
}
