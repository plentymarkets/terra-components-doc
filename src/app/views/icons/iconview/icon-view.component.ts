import {
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';
import { Http } from '@angular/http';
import { TerraSuggestionBoxValueInterface } from '@plentymarkets/terra-components';
import { ScrollToViewHelper } from '../../../helper/scrollToView.helper';
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
    private _iconList:Array<TerraSuggestionBoxValueInterface> = [];
    private _searchValue:string;
    private _searchResultCounter:number;
    private _searchResultText:string;

    constructor(private _data:iconService,
                public _scrollToViewHelper:ScrollToViewHelper,
                public http:Http)
    {
    }

    public checkInput():void
    {
        let searchValue:string = this._searchValue.toLowerCase();
        searchValue = searchValue.replace(/\s/g, '');
        console.log(searchValue);
        this._searchResultCounter = 0;

        if(!isNullOrUndefined(searchValue) && searchValue !== "")
        {
            this._iconList.forEach(icon => {
                if(!isNullOrUndefined(icon.value) && icon.value !== "")
                {
                    if((<any>icon).value.includes(searchValue))
                    {
                        let iconContainer = document.getElementById(icon.value + '_container');
                        iconContainer.style.display = "block";
                        this._searchResultCounter++;
                    }
                    else
                    {
                        let iconContainer = document.getElementById(icon.value + '_container');
                        iconContainer.style.display = "none";
                    }
                }

            });
        }
        else
        {
            if(searchValue === "")
            {
                this._iconList.forEach(icon => {
                    let iconContainer = document.getElementById(icon.value + '_container');
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
