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
        loadChildren: () => import('./views/components/components.module').then(m => m.ComponentsModule),
    },
    {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
    },
    {
        path: 'icon-tutorial',
        component: IconTutorialComponent
    }
];
