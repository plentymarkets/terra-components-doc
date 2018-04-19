import {
    APP_INITIALIZER,
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './terra-components-doc.component';
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
import { l10nConfig } from './core/localization/terra-localization.config';
import { RouteResolver } from './resolve/route.resolver';
import { ComponentTemplateComponent } from './views/components/component-template.component';
import { IconSidebarComponent } from './views/icons/sidebar/icon-sidebar.component';
import { IconTemplateComponent } from './views/icons/icon-template.component';
import { StartpageComponent } from './views/startpage/startpage.component';
import { iconService } from './views/icons/service/icon.service';
import { ComponentsConfig } from './views/components/config/components.config';
import { ScrollToViewHelper } from './helper/scrollToView.helper';
import { HighlightTextHelper } from './helper/highlightText.helper';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';
import { IconTutorialComponent } from './views/icon-tutorial/icon-tutorial.component';
import { SidebarComponentDataProvider } from './views/components/data/sidebar-component-data-provider';
import { IconItemComponent } from './views/icons/icon-item-component/icon-item.component';
import { HttpClientModule } from '@angular/common/http';

export function initRoutes(pluginsConfig:RouteResolver):Function
{
    return ():Promise<any> => pluginsConfig.load().catch(error => {
        if(error.status === 401)
        {
        }
    });
}

@NgModule({
              entryComponents: [
                  ComponentSidebarComponent,
                  IconSidebarComponent,
                  IconViewComponent,
                  ComponentViewComponent,
                  ComponentTemplateComponent,
                  IconTemplateComponent,
                  StartpageComponent,
                  IconTutorialComponent
              ],
              exports:         [
                  RouterModule,
              ],
              imports:         [
                  BrowserModule,
                  HttpModule,
                  HttpClientModule,
                  FormsModule,
                  RouterModule.forRoot([]),
                  TranslationModule.forRoot(l10nConfig),
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
                  StartpageComponent,
                  IconTutorialComponent,
                  IconItemComponent
              ],
              providers:       [
                  DynamicModuleBuilderService,
                  HighlightJsService,
                  ComponentsConfig,
                  iconService,
                  ScrollToViewHelper,
                  HighlightTextHelper,
                  SidebarComponentDataProvider,
                  RouteResolver,
                  {
                      provide:    APP_INITIALIZER,
                      useFactory: initRoutes,
                      deps:       [RouteResolver],
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
