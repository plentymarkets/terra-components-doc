import {
    Component,
    OnChanges,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';
import { Http } from '@angular/http';
import { TerraSuggestionBoxValueInterface } from '@plentymarkets/terra-components';
import { ScrollToViewHelper } from '../../../helper/scrollToView.helper';
import { HighlightTextHelper } from '../../../helper/highlightText.helper';
import { Observable } from 'rxjs/Observable';
import { isNullOrUndefined } from 'util';

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
    private _searchValue:string;
    private _searchResultCounter: number;
    private _searchResultText: string;

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
    }

    checkInput()
    {
        let searchValue = this._searchValue.toLowerCase();
        this._searchResultCounter = 0;

        if(!isNullOrUndefined(searchValue) && searchValue !== "")
        {
            this._iconList.forEach(icon => {
                if(!isNullOrUndefined(icon.value) && icon.value !== "" )
                {
                    if(icon.value.includes(searchValue))
                    {
                        let iconContainer = document.getElementById(icon.value+'_container');
                        iconContainer.style.display = "block";
                        this._searchResultCounter++;
                    }
                    else
                    {
                        let iconContainer = document.getElementById(icon.value+'_container');
                        iconContainer.style.display = "none";
                    }
                }

            });
        }
        else
        {
            if(searchValue === "")
            {
                this._iconList.forEach( icon =>{
                    let iconContainer = document.getElementById(icon.value+'_container');
                    iconContainer.style.display = "block";
                    this._searchResultCounter++;
                });

            }
        }
        if(this._searchResultCounter == 1)
        {
            this._searchResultText = " matching result";
        }
        else
        {
            this._searchResultText = " matching results";
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
        this._newIconArray = this._data.loadIconArray();
        this.buildSuggestionBoxArray();
        this._searchResultCounter = this._iconList.length;
        this._searchResultText = " matching results";
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
