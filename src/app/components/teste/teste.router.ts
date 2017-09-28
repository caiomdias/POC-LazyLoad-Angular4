import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from 'app/components/teste/teste.component';

const TESTE_ROUTER: Routes = [
    {
        path: '',
        component: TesteComponent
    },

];

export const testeRouting = RouterModule.forChild(TESTE_ROUTER);