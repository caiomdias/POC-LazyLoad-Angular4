import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { accountRouting } from 'app/components/account/account.router';
import { AccountLoginComponent } from 'app/components/account/login/account.login.component';
import { RegisterComponent } from 'app/components/account/register/register.component';


@NgModule({
  imports: [
    CommonModule,
    accountRouting
  ],
  declarations: [
    AccountLoginComponent,
    RegisterComponent
  ]
})
export class AccountModule { }
