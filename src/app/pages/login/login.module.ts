import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
	MatCardModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatIconModule,
	MatProgressSpinnerModule,

} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		MatButtonModule,
		FlexLayoutModule,
		MatCardModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatIconModule,
		MatProgressSpinnerModule,
		FormsModule
	]
})
export class LoginModule { }
