import {
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';
import { Http } from '@angular/http';
import { TerraSuggestionBoxValueInterface } from '@plentymarkets/terra-components';
import { ScrollToViewHelper } from '../../../helper/scrollToView.helper';
import { HighlightTextHelper } from '../../../helper/highlightText.helper';

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
        this.http.get(this._iconButtonCodeExamplePath).subscribe((res:any) =>
        {
            this._iconButtonCodeExample = this._highlightTextHelper.highlightText(res.text(), 'xml');
        });
        this.http.get(this._iconListCodeExamplePath).subscribe((res:any) =>
        {
            this._iconListCodeExample = this._highlightTextHelper.highlightText(res.text(), 'xml');
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
