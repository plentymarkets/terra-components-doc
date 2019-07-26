import { NgModule } from '@angular/core';
import {
    TerraComponentsExamplesModule,
    TerraComponentsModule
} from '@plentymarkets/terra-components';
import { TabsModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';

import { ComponentsComponent } from './components.component';
import { ComponentSidebarComponent } from './sidebar/component-sidebar.component';
import { ComponentViewComponent } from './component-view/component-view.component';
import { StartpageComponent } from '../startpage/startpage.component';
import {
    RouterModule,
    Routes
} from '@angular/router';

const routes:Routes = [
    {
        path:      '',
        component: ComponentsComponent,
        children:  [
            {
                path:      '',
                pathMatch: 'full',
                component: StartpageComponent
            },
            {
                path:      ':componentName',
                component: ComponentViewComponent
            }
        ]
    }
];

@NgModule({
    imports:      [
        CommonModule,
        RouterModule.forChild(routes),
        TerraComponentsModule,
        TerraComponentsExamplesModule,
        TabsModule.forRoot(),
        HighlightModule,
        MarkdownModule.forRoot({loader: HttpClient})
    ],
    declarations: [
        ComponentsComponent,
        ComponentSidebarComponent,
        ComponentViewComponent,
        StartpageComponent
    ]
})
export class ComponentsModule
{}
