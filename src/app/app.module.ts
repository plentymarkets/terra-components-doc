import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app/terra-components.module';
import { HttpModule } from '@angular/http';
import { TranslationModule } from 'angular-l10n';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { DataModelComponent } from './data.model';

@NgModule({
              imports:      [
                  BrowserModule,
                  HttpModule,
                  FormsModule,
                  TranslationModule.forRoot(),
                  TerraComponentsModule.forRoot(),

              ],
              declarations: [
                  AppComponent,
                  SidebarComponent,
                  OverviewComponent,
                  DataModelComponent
              ],
              providers:    [],
              bootstrap:    [
                  AppComponent
              ]
          })
export class PluginTerraBasicModule
{
}
