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

import { ComponentTemplateComponent } from '../components/component-template.component';
import { ComponentSidebarComponent } from '../components/sidebar/component-sidebar.component';
import { ComponentViewV2Component } from './component-view-v2/component-view-v2.component';


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
    exports:      [ComponentTemplateComponent],
    declarations: [
        ComponentTemplateComponent,
        ComponentSidebarComponent,
        ComponentViewV2Component
    ]
})
export class ComponentsModule
{}
