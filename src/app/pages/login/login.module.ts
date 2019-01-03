import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		MatCheckboxModule,
		FlexLayoutModule
	]
})
export class LoginModule { }
