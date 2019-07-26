import { NgModule } from '@angular/core';
import {
    TerraComponentsExamplesModule,
    TerraComponentsModule
} from '@plentymarkets/terra-components';
import { TabsModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';

import { ComponentsComponent } from './components.component';
import { ComponentSidebarComponent } from './sidebar/component-sidebar.component';
import { ComponentViewComponent } from './component-view/component-view.component';


@NgModule({
    imports:      [
        CommonModule,
        RouterModule.forChild([]),
        TerraComponentsModule,
        TerraComponentsExamplesModule,
        TabsModule.forRoot(),
        HighlightModule,
        MarkdownModule.forRoot({loader: HttpClient})
    ],
    exports:      [ComponentsComponent],
    declarations: [
        ComponentsComponent,
        ComponentSidebarComponent,
        ComponentViewComponent
    ]
})
export class ComponentsModule
{}
