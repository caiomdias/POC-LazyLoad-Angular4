import { RouterModule, Routes } from '@angular/router';
import { AccountLoginComponent } from 'app/components/account/login/account.login.component';
import { RegisterComponent } from 'app/components/account/register/register.component';


const ACCOUNT_ROUTER: Routes = [
    {
        path: '',
        component: AccountLoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
];

export const accountRouting = RouterModule.forChild(ACCOUNT_ROUTER);