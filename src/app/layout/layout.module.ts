import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainLayoutComponent],
})
export class LayoutModule {}
