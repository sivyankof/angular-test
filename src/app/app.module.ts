import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { MenuComponent } from './header/menu/menu.component';
import { MainContentModule } from './main-content/main-content.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
    declarations: [AppComponent, MenuComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MainContentModule, FooterModule, MatListModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
