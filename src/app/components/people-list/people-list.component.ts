import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/types';

@Component({
	selector: 'app-people-list',
	templateUrl: './people-list.component.html',
	styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

	@Input() people: Person[];
	constructor() { }

	ngOnInit() {
	}

}
