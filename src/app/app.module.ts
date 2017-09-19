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
import { DynamicHTMLModule } from "ng-dynamic";
import { TerraButtonComponent } from "@plentymarkets/terra-components";

@NgModule({
    entryComponents: [
        MainviewComponent,
        OverviewComponent,
        ApiComponent,
        ExampleComponent
    ],
    exports:         [
        RouterModule
    ],
    imports:         [
        BrowserModule,
        HttpModule,
        FormsModule,
        [RouterModule.forRoot([])],
        TranslationModule.forRoot(),
        TerraComponentsModule.forRoot(),
        DynamicHTMLModule.forRoot({
            components: [
                { component: TerraButtonComponent, selector: 'terra-button' },
            ]
        })

    ],
    declarations:    [
        AppComponent,
        SidebarComponent,
        MainviewComponent,
        OverviewComponent,
        ExampleComponent,
        ApiComponent,

    ],
    providers:       [
        RoutingService,
        ComponentService
    ],
    bootstrap:       [
        AppComponent
    ]
})
export class PluginTerraBasicModule
{
}
