import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './features/header/header.module';
import { UsersModule } from './features/users/users.module';


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, UsersModule, HeaderModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
