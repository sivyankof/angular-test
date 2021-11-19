import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatCardModule,
        MatTabsModule,
        TextFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatButtonModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ],
    exports: [
        CommonModule,
        MatCardModule,
        MatTabsModule,
        TextFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatButtonModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ],
})
export class MaterialModule {}
