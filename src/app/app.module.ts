import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
    L10nLoader,
    LocalizationModule
} from 'angular-l10n';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { l10nConfig } from './localization/l10n.config';
import { routes } from './app.routing';
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
        AppComponent
    ],
    imports:      [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {useHash: true}),
        HttpClientModule,
        LocalizationModule.forRoot(l10nConfig),
        HighlightModule.forRoot({
            languages: hljslanguages,
            config:    {languages: ['typescript', 'scss', 'html']}
        }),
        IconTutorialModule
    ],
    bootstrap:    [AppComponent]
})
export class AppModule
{
    constructor(public l10nLoader:L10nLoader)
    {
        this.l10nLoader.load();
    }
}
