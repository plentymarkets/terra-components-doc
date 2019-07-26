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
import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
import { IconTutorialModule } from './views/icon-tutorial/icon-tutorial.module';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljslanguages():Array<any>
{
    return [
        {name: 'typescript', func: typescript},
        {name: 'scss', func: scss},
        {name: 'html', func: xml}
    ];
}


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
        HighlightModule.forRoot({
            languages: hljslanguages,
            config:    {languages: ['typescript', 'scss', 'html']}
        }),
        ComponentsModule,
        IconsModule,
        IconTutorialModule
    ],
    bootstrap:    [AppComponent]
})
export class AppModule
{}
