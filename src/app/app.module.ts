import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app/terra-components.module';
import { HttpModule } from '@angular/http';
import { TranslationModule } from 'angular-l10n';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainviewComponent } from './mainview/mainview.component';
import { OverviewComponent } from './templates/overview/overview.template';
import { ApiComponent } from './templates/api/api.template';
import { ComponentService } from './component-service.component';
import { RoutingService } from './routing-service.component';
import { DynamicPluginLoaderComponent } from './core/dynamic-module-loader/dynamic-module-loader.component';
import { DynamicModuleBuilderService } from './core/dynamic-module-builder/dynamic-module-builder.service';

@NgModule({
    entryComponents: [
        MainviewComponent,
        OverviewComponent,
        ApiComponent,
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
    ],
    declarations:    [
        AppComponent,
        SidebarComponent,
        MainviewComponent,
        OverviewComponent,
        ApiComponent,
        DynamicPluginLoaderComponent
    ],
    providers:       [
        RoutingService,
        ComponentService,
        DynamicModuleBuilderService
    ],
    bootstrap:       [
        AppComponent
    ]
})
export class PluginTerraBasicModule
{
}
