import {
    APP_INITIALIZER,
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './terra-components-doc.component';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app/terra-components.module';
import { HttpModule } from '@angular/http';
import { TranslationModule } from 'angular-l10n';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentSidebarComponent } from './views/components/sidebar/component-sidebar.component';
import { DynamicModuleBuilderService } from './views/components/dynamic-module-builder/dynamic-module-builder.service';
import { ComponentViewComponent } from './views/components/component-view/component-view.component';
import {
    HighlightJsModule,
    HighlightJsService
} from 'angular2-highlight-js';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { IconViewComponent } from './views/icons/iconview/icon-view.component';
import { LocalizationConfig } from './core/localization/terra-localization.config';
import { RouteResolver } from './resolve/route.resolver';
import { ComponentTemplateComponent } from './views/components/component-template.component';
import { IconSidebarComponent } from './views/icons/sidebar/icon-sidebar.component';
import { IconTemplateComponent } from './views/icons/icon-template.component';
import { StartpageComponent } from './views/startpage/startpage.component';
import { iconService } from './views/icons/service/icon.service';
import { ComponentsConfig } from './views/components/config/components.config';
import { scrollToViewHelper } from './helper/scrollToView.helper';

export function initRoutes(pluginsConfig:RouteResolver):Function
{
    return ():Promise<any> => pluginsConfig.load().catch(error =>
    {
        if(error.status === 401)
        {
        }
    });
}

export function initLocalization(localizationConfig:LocalizationConfig):Function
{
    return () => localizationConfig.load();
}

@NgModule({
    entryComponents: [
        ComponentSidebarComponent,
        IconSidebarComponent,
        IconViewComponent,
        ComponentViewComponent,
        ComponentTemplateComponent,
        IconTemplateComponent,
        StartpageComponent
    ],
    exports:         [
        RouterModule,
    ],
    imports:         [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([]),
        TranslationModule.forRoot(),
        TerraComponentsModule.forRoot(),
        MarkdownToHtmlModule.forRoot(),
        HighlightJsModule
    ],
    declarations:    [
        AppComponent,
        ComponentSidebarComponent,
        IconSidebarComponent,
        IconViewComponent,
        ComponentViewComponent,
        ComponentTemplateComponent,
        IconTemplateComponent,
        StartpageComponent
    ],
    providers:       [
        DynamicModuleBuilderService,
        HighlightJsService,
        ComponentsConfig,
        iconService,
        scrollToViewHelper,
        RouteResolver,
        {
            provide:    APP_INITIALIZER,
            useFactory: initRoutes,
            deps:       [RouteResolver],
            multi:      true
        },
        LocalizationConfig,
        {
            provide:    APP_INITIALIZER,
            useFactory: initLocalization,
            deps:       [LocalizationConfig],
            multi:      true
        }
    ],
    bootstrap:       [
        AppComponent
    ]
})
export class PluginTerraBasicModule
{
}
