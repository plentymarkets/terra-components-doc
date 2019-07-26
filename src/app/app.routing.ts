import { Routes } from '@angular/router';
import { ComponentsComponent } from './views/components/components.component';
import { StartpageComponent } from './views/startpage/startpage.component';
import { ComponentViewComponent } from './views/components/component-view/component-view.component';
import { IconTemplateComponent } from './views/icons/icon-template.component';
import { IconTutorialComponent } from './views/icon-tutorial/icon-tutorial.component';

export const routes:Routes = [
    {
        path:       '',
        pathMatch:  'full',
        redirectTo: 'components'
    },
    {
        path:      'components',
        component: ComponentsComponent,
        children:  [
            {
                path: '',
                pathMatch: 'full',
                component: StartpageComponent
            },
            {
                path:      ':componentName',
                component: ComponentViewComponent
            }
        ]
    },
    {
        path: 'icons',
        component:IconTemplateComponent
    },
    {
        path: 'icon-tutorial',
        component: IconTutorialComponent
    }
];
