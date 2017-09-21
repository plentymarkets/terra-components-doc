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
import { ExampleComponent } from './templates/example/example.template';
import { ApiComponent } from './templates/api/api.template';
import { ComponentService } from "./component-service.component";
import { RoutingService } from "./routing-service.component";
import { DynamicPluginBuilder } from "./templates/example/dynamic-plugin.builder";
import { DynamicPluginLoaderComponent } from "./templates/example/loader/dynamic-plugin-loader.component";

@NgModule({
    entryComponents: [
        MainviewComponent,
        OverviewComponent,
        ApiComponent,
        ExampleComponent,
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
        ExampleComponent,
        ApiComponent,
        DynamicPluginLoaderComponent
    ],
    providers:       [
        RoutingService,
        ComponentService,
        DynamicPluginBuilder
    ],
    bootstrap:       [
        AppComponent
    ]
})
export class PluginTerraBasicModule
{
}
