import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app/terra-components.module';
import { HttpModule } from '@angular/http';
import { TranslationModule } from 'angular-l10n';
import { FormsModule } from '@angular/forms';
import{RouterModule} from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainviewComponent } from './mainview/mainview.component';
import { AppRoutingModule } from './app.routing';
import { OverviewComponent } from './templates/overview/overview.template';
import { ExampleComponent } from './templates/example/example.template';
import { ApiComponent } from './templates/api/api.template';

@NgModule({
              imports:      [
                  BrowserModule,
                  HttpModule,
                  FormsModule,
                  RouterModule,
                  TranslationModule.forRoot(),
                  TerraComponentsModule.forRoot(),
                  AppRoutingModule

              ],
              declarations: [
                  AppComponent,
                  SidebarComponent,
                  MainviewComponent,
                  OverviewComponent,
                  ExampleComponent,
                  ApiComponent

              ],
              providers:    [],
              bootstrap:    [
                  AppComponent
              ]
          })
export class PluginTerraBasicModule
{
}
