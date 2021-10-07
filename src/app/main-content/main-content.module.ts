import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageModule } from './first-page/first-page.module';
import { SecondPageModule } from './second-page/second-page.module';
import { ThreePageComponent } from './three-page/three-page.component';

@NgModule({
    declarations: [ThreePageComponent],
    imports: [CommonModule, FirstPageModule, SecondPageModule],
})
export class MainContentModule {}
