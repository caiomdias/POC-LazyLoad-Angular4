import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRouter } from './app.router';
import { AppComponent } from './app.component';
import { HomeModule } from 'app/components/home/home.module';
import { TesteModule } from 'app/components/teste/teste.module';
import { AccountModule } from 'app/components/account/account.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
