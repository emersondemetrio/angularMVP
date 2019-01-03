import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoggedOutGuard } from './guards/logged-out.guard';

const routes: Routes = [{
	path: '',
	redirectTo: '/login',
	pathMatch: 'full'
}, {
	path: 'login',
	component: LoginComponent,
	canActivate: [LoggedOutGuard]
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [
		// guards
	]
})
export class AppRoutingModule { }
