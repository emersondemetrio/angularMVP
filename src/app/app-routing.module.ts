import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoggedOutGuard } from './guards/logged-out.guard';
import { MockComponent } from './pages/mock/mock.component';
import { LoggedInGuard } from './guards/logged-in.guard';

const routes: Routes = [{
	path: '',
	redirectTo: '/login',
	pathMatch: 'full'
}, {
	path: 'login',
	component: LoginComponent,
	canActivate: [LoggedOutGuard]
}, {
	path: 'mock',
	component: MockComponent,
	canActivate: [LoggedInGuard]
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [
		// guards
	]
})
export class AppRoutingModule { }
