import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { FirstPageModule } from './first-page/first-page.module';
import { SecondPageModule } from './second-page/second-page.module';
import { ThreePageComponent } from './three-page/three-page.component';

@NgModule({
    declarations: [AppComponent, ThreePageComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatTabsModule,
        FirstPageModule,
        SecondPageModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
