import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LocalizationModule } from 'angular-l10n';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { l10nConfig } from './localization/l10n.config';
import { TranslationProvider } from './localization/translation-provider';
import { StartpageComponent } from './views/startpage/startpage.component';
import { routes } from './app.routing';
import { ComponentsModule } from './views/components.module';
import { IconsModule } from './views/icons/icons.module';

@NgModule({
    declarations: [
        AppComponent,
        StartpageComponent,
    ],
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        LocalizationModule.forRoot(l10nConfig, {translationProvider: TranslationProvider}),
        ComponentsModule,
        IconsModule
    ],
    bootstrap:    [AppComponent]
})
export class AppModule
{
}
