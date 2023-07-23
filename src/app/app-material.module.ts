import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
  ]
})
export class AppMaterialModule { }
