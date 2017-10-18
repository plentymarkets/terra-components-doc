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
import { SidebarComponent } from './view/sidebar/sidebar.component';
import { MainviewComponent } from './view/mainview/mainview.component';
import { OverviewComponent } from './view/overview/overview.template';
import { ApiComponent } from './view/api/api.template';
import { RoutingService } from './routing-service.component';
import { DynamicPluginLoaderComponent } from './core/dynamic-module-loader/dynamic-module-loader.component';
import { DynamicModuleBuilderService } from './core/dynamic-module-builder/dynamic-module-builder.service';
import {
    HighlightJsModule,
    HighlightJsService
} from 'angular2-highlight-js';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { IconviewComponent } from './view/icons/iconview.component';
import { GuideComponent } from './view/guide/guide.component';
import { RouteResolver } from './core/resolve/route.resolver';

export function initRoutes(pluginsConfig:RouteResolver):Function
{
    return ():Promise<any> => pluginsConfig.load().catch(error =>
    {
        if(error.status === 401)
        {
        }
    });
}

@NgModule({
    entryComponents: [
        MainviewComponent,
        OverviewComponent,
        ApiComponent,
        IconviewComponent,
        GuideComponent,
        DynamicPluginLoaderComponent
    ],
    exports:         [
        RouterModule
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
        MainviewComponent,
        OverviewComponent,
        ApiComponent,
        IconviewComponent,
        GuideComponent,
        DynamicPluginLoaderComponent
    ],
    providers:       [
        RoutingService,
        DynamicModuleBuilderService,
        HighlightJsService,
        RouteResolver,
        {
            provide:    APP_INITIALIZER,
            useFactory: initRoutes,
            deps:       [RouteResolver],
            multi:      true
        },
    ],
    bootstrap:       [
        AppComponent
    ]
})
export class PluginTerraBasicModule
{
}
