import { Routes } from '@angular/router';
import { ComponentTemplateComponent } from './components/component-template.component';
import { StartpageComponent } from './views/startpage/startpage.component';
import { ComponentViewV2Component } from './views/component-view-v2/component-view-v2.component';

export const routes:Routes = [
    {
        path:       '',
        pathMatch:  'full',
        redirectTo: 'components'
    },
    {
        path:      'components',
        component: ComponentTemplateComponent,
        children:  [
            {
                path: '',
                pathMatch: 'full',
                component: StartpageComponent
            },
            {
                path:      ':componentName',
                component: ComponentViewV2Component
            }
        ]
    }
];
