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
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { DynamicPluginLoaderComponent } from './views/components/main-view/main-view.component';
import { DynamicModuleBuilderService } from './views/components/dynamic-module-builder/dynamic-module-builder.service';
import {
    HighlightJsModule,
    HighlightJsService
} from 'angular2-highlight-js';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { IconviewComponent } from './views/icons/iconview.component';
import { RouteResolver } from './views/components/resolve/route.resolver';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { LocalizationConfig } from './core/localization/terra-localization.config';
import { iconService } from './views/icons/service/icon.service';

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
        IconviewComponent,
        DynamicPluginLoaderComponent,
        LandingPageComponent
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
        SidebarComponent,
        IconviewComponent,
        LandingPageComponent,
        DynamicPluginLoaderComponent
    ],
    providers:       [
        DynamicModuleBuilderService,
        HighlightJsService,
        iconService,
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
