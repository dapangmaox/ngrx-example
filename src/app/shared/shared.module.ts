import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [MatTableModule, MatToolbarModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ...materialModules],
  exports: [CommonModule, HttpClientModule, ...materialModules],
})
export class SharedModule {}
