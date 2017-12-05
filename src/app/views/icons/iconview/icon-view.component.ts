import {
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';
import { Http } from '@angular/http';
import { TerraSuggestionBoxValueInterface } from '@plentymarkets/terra-components';
import { ScrollToViewHelper } from '../../../helper/scrollToView.helper';
import { HighlightTextHelper } from '../../../helper/highlightText.helper';
import { Observable } from 'rxjs/Observable';

@Component({
    selector:    'iconview',
    templateUrl: './icon-view.component.html',
    styles:      [require('./icon-view.component.scss'),
                  require('./icon-view.component.glob.scss').toString()
    ]
})
export class IconViewComponent implements OnInit
{

    private _newIconArray:any;
    private _iconButtonCodeExample:string = '';
    private _iconButtonCodeExamplePath:string = 'assets/iconExample/iconButtonCodeExample.html';
    private _iconListCodeExample:string;
    private _iconListCodeExamplePath:string = 'assets/iconExample/iconListCodeExample.html';
    private _iconList:Array<TerraSuggestionBoxValueInterface> = [];
    private _suggestionboxValue:any;

    constructor(private _data:iconService,
                private _scrollToViewHelper:ScrollToViewHelper,
                private _highlightTextHelper:HighlightTextHelper,
                public http:Http)
    {
        if(process.env.ENV !== 'production')
        {
            this._iconButtonCodeExamplePath = 'src/app/assets/iconExample/iconButtonCodeExample.html';
            this._iconListCodeExamplePath = 'src/app/assets/iconExample/iconListCodeExample.html';
        }
        this._suggestionboxValue = "";
        this._iconList.push({
            caption: "",
            value:   ""
        });
    }

    ngOnInit()
    {
        Observable.combineLatest(
            this.http.get(this._iconButtonCodeExamplePath),
            this.http.get(this._iconListCodeExamplePath),
            (button:any, list:any) =>
            {
                return {
                    button: button.text(),
                    list:   list.text()
                };
            }
        ).subscribe((data:any) =>
        {

            this._iconButtonCodeExample = this._highlightTextHelper.highlightText(data.button, 'xml');
            this._iconListCodeExample = this._highlightTextHelper.highlightText(data.list, 'css');

        });
        this._newIconArray = this._data.loadIconArray();
        this.buildSuggestionBoxArray();
    }

    buildSuggestionBoxArray():void
    {
        for(let value of this._newIconArray)
        {
            this._iconList.push(
                {
                    caption: value.iconVariable,
                    value:   value.iconVariable
                });
        }
    }

}
