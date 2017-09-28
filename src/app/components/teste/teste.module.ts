import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste.component';
import { testeRouting } from 'app/components/teste/teste.router';

@NgModule({
  imports: [
    CommonModule,
    testeRouting
  ],
  declarations: [TesteComponent]
})
export class TesteModule { }
