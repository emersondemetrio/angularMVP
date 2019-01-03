import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		MatCheckboxModule
	]
})
export class LoginModule { }
