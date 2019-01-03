import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockComponent } from './mock.component';
import { PeopleListModule } from 'src/app/components/people-list/people-list.module';

@NgModule({
	declarations: [MockComponent],
	imports: [
		CommonModule,
		PeopleListModule
	]
})
export class MockModule { }
