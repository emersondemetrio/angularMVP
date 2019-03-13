import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginModule } from './pages/login/login.module';
import { MockModule } from './pages/mock/mock.module';
import { MockService } from './services/mock.service';
import { ComponentsModule } from './components/components.module';

import {
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatMenuModule,
	MatCardModule,
	MatSidenavModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatChipsModule,
	MatSnackBarModule,
	MatTabsModule,
} from '@angular/material';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FlexLayoutModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		LoginModule,
		MockModule,
		ComponentsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatCardModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatChipsModule,
		MatSnackBarModule,
		MatTabsModule,
	],
	providers: [
		MockService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
