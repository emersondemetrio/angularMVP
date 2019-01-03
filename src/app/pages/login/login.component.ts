import { Component, OnInit } from '@angular/core';
import { User, AGSServerResponse } from 'src/types';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private user: User = {};

	constructor(
		private router: Router,
		private loginService: LoginService
	) { }

	ngOnInit() { }

	login() {
		this
			.loginService
			.login(this.user)
			.subscribe(
				() => this.router.navigate(['/mock']),
				(error: AGSServerResponse) => console.error('Error', error)
			)
	}
}
