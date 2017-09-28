import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/components/home/home.component';

const HOME_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const homeRouter = RouterModule.forChild(HOME_ROUTES);