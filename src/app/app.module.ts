import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstPageComponent } from './first-page/first-page.component';
import { RoutingModule } from './first-page/first-page-routing.modules';
import { SecondPageComponent } from './second-page/second-page.component';
import { ThreePageComponent } from './three-page/three-page.component';

@NgModule({
    declarations: [AppComponent, FirstPageComponent, SecondPageComponent, ThreePageComponent],
    imports: [BrowserModule, AppRoutingModule, RoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
