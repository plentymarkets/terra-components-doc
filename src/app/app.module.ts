import { NgModule } from '@angular/core';
import { ComponentViewComponent } from './views/component-view/component-view.component';
import { ComponentTemplateComponent } from './components/component-template.component';
import { ComponentSidebarComponent } from './components/sidebar/component-sidebar.component';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import {
    HttpClient,
    HttpClientModule
} from '@angular/common/http';
import { LocalizationModule } from 'angular-l10n';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentViewV2Component } from './views/component-view-v2/component-view-v2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import {
    TerraComponentsExamplesModule,
    TerraComponentsModule
} from '@plentymarkets/terra-components';
import { l10nConfig } from './core/localization/l10n.config';
import { TranslationProvider } from './core/localization/translation-provider';

const routes:Routes = [
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
                path:      ':componentName',
                component: ComponentViewV2Component
            }
        ]
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ComponentViewComponent,
        ComponentTemplateComponent,
        ComponentSidebarComponent,
        ComponentViewV2Component,
    ],
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        LocalizationModule.forRoot(l10nConfig, {translationProvider: TranslationProvider}),
        TerraComponentsModule,
        TerraComponentsExamplesModule,
        MarkdownModule.forRoot({loader: HttpClient}),
        TabsModule.forRoot()
    ],
    bootstrap:    [AppComponent]
})
export class AppModule
{
}
