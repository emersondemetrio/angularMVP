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
		ComponentsModule
	],
	providers: [
		MockService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
