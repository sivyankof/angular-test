import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThreePageComponent } from './three-page/three-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [AppComponent, FirstPageComponent, SecondPageComponent, ThreePageComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatCardModule, MatButtonModule],
    // exports: [MatCardModule, MatButtonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
