import { NgModule } from '@angular/core';
import { ComponentViewComponent } from './component-view/component-view.component';
import { ComponentTemplateComponent } from '../components/component-template.component';
import { ComponentSidebarComponent } from '../components/sidebar/component-sidebar.component';
import { ComponentViewV2Component } from './component-view-v2/component-view-v2.component';
import {
    TerraComponentsExamplesModule,
    TerraComponentsModule
} from '@plentymarkets/terra-components';
import { TabsModule } from 'ngx-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljslanguages():Array<any>
{
    return [
        {name: 'typescript', func: typescript},
        {name: 'scss', func: scss},
        {name: 'html', func: xml}
    ];
}


@NgModule({
    imports:      [
        CommonModule,
        RouterModule.forChild([]),
        TerraComponentsModule,
        TerraComponentsExamplesModule,
        TabsModule.forRoot(),
        HighlightModule.forRoot({
            languages: hljslanguages,
            config:    {languages: ['typescript', 'scss', 'html']}
        }),
        MarkdownModule.forRoot({loader: HttpClient})
    ],
    exports:      [ComponentTemplateComponent],
    declarations: [
        ComponentViewComponent,
        ComponentTemplateComponent,
        ComponentSidebarComponent,
        ComponentViewV2Component],
    providers:    [],
})
export class ComponentsModule
{
}
