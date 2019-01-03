import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list.component';
import { MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MatListModule,
		MatButtonModule,
		MatIconModule
	],
	exports: [
		PeopleListComponent
	],
	declarations: [
		PeopleListComponent
	]
})
export class PeopleListModule { }
