import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
	selector: 'app-root',
	templateUrl: '../static/components/app.component.html',
	styleUrls: ['../static/components/app.component.scss']
})
export class AppComponent {
	constructor(private loginService: LoginService) {
	}

	public checkUser() {
		return this.loginService.hasSession();
	}
}
