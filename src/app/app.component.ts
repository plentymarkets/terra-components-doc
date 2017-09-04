import { Component } from '@angular/core';
import {
    Translation,
    TranslationService
} from 'angular-l10n';

@Component({
               selector: 'app-component',
               template: require('./app.component.html'),
               styles:   [require('./app.component.scss')],
           })
export class AppComponent extends Translation
{
    private myVariable:string;

    public constructor(public translation:TranslationService)
    {
        super(translation);

        this.myVariable = "Test123";
    }
}
