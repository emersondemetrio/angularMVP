import { Component, OnInit } from '@angular/core';
import { Person } from 'src/types';
import { MockService } from 'src/app/services/mock.service';

@Component({
	selector: 'app-mock',
	templateUrl: './mock.component.html',
	styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {

	constructor(
		private mockService: MockService
	) { }

	public people: Person[] = null;

	ngOnInit() {
		this
			.mockService
			.list()
			.subscribe(
				resp => this.people = resp,
				error => console.error(error)
			);
	}
}
