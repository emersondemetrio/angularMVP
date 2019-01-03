import { Component, OnInit } from '@angular/core';
import { User } from 'src/types';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private user: User = {};

	constructor() { }

	ngOnInit() { }

	login() {
		alert(this.user.username + ', ' + this.user.password);
	}
}
