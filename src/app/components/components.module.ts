import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListModule } from './people-list/people-list.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	exports: [
		PeopleListModule
	]
})
export class ComponentsModule { }
