import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app/terra-components.module';
import { HttpModule } from '@angular/http';
import { TestComponent } from './test/test.component';
import { TranslationModule } from 'angular-l10n';
import { FormsModule } from '@angular/forms';

@NgModule({
              imports:      [
                  BrowserModule,
                  HttpModule,
                  FormsModule,
                  TranslationModule.forRoot(),
                  TerraComponentsModule.forRoot()
              ],
              declarations: [
                  AppComponent,
                  StartComponent,
                  TestComponent
              ],
              providers:    [],
              bootstrap:    [
                  AppComponent
              ]
          })
export class PluginTerraBasicModule
{
}
