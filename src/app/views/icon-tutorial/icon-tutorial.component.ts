import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {
    Component,
    OnInit
} from '@angular/core';
import { HighlightTextHelper } from '../../helper/highlightText.helper';

@Component({
               selector:    'icon-tutorial',
               templateUrl: './icon-tutorial.component.html',
               styles:      [require('./icon-tutorial.component.scss'),
                             require('./icon-tutorial.component.glob.scss').toString()
               ]
           })
export class IconTutorialComponent implements OnInit
{

    private _iconButtonCodeExample:string = '';
    private _iconButtonCodeExamplePath:string = 'assets/iconExample/iconButtonCodeExample.html';
    private _iconListCodeExample:string = '';
    private _iconListCodeExamplePath:string = 'assets/iconExample/iconListCodeExample.html';


    constructor(
                private _highlightTextHelper:HighlightTextHelper,
                public http:Http)
    {
        if(process.env.ENV !== 'production')
        {
            this._iconButtonCodeExamplePath = 'src/app/assets/iconExample/iconButtonCodeExample.html';
            this._iconListCodeExamplePath = 'src/app/assets/iconExample/iconListCodeExample.html';
        }
    }

    ngOnInit()
    {
        Observable.combineLatest(
            this.http.get(this._iconButtonCodeExamplePath),
            this.http.get(this._iconListCodeExamplePath),
            (button:any, list:any) => {
                return {
                    button: button.text(),
                    list:   list.text()
                };
            }
        ).subscribe((data:any) => {
            this._iconButtonCodeExample = this._highlightTextHelper.highlightText(data.button, 'xml');
            this._iconListCodeExample = this._highlightTextHelper.highlightText(data.list, 'xml');
        });
    }
}
