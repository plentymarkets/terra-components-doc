import { Routes } from '@angular/router';
import { IconTutorialComponent } from './views/icon-tutorial/icon-tutorial.component';

export const routes:Routes = [
    {
        path:       '',
        pathMatch:  'full',
        redirectTo: 'components'
    },
    {
        path:      'components',
        loadChildren: './views/components/components.module#ComponentsModule',
    },
    {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
    },
    {
        path: 'icon-tutorial',
        component: IconTutorialComponent
    }
];
