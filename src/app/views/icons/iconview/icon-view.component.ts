import {
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';
import { TerraSuggestionBoxValueInterface } from '@plentymarkets/terra-components';
import { isNullOrUndefined } from 'util';

@Component({
    selector:    'iconview',
    templateUrl: './icon-view.component.html',
    styles:      [require('./icon-view.component.scss'),
                  require('./icon-view.component.glob.scss').toString()
    ]
})
export class IconviewComponent implements OnInit
{

    private _newIconArray:any;
    private _iconList:Array<TerraSuggestionBoxValueInterface>;
    private _suggestionboxValue:string;

    //@ViewChild('sbox') sbox:TerraSuggestionBoxComponent;

    constructor(private _data:iconService)
    {
        this._iconList = [];
        this._suggestionboxValue = '';
    }

    ngOnInit()
    {
        this.buildSuggestionBoxArray();
        this._newIconArray = this._data.loadIconArray();
        //this.sbox.resetComponentValue();
    }

    buildSuggestionBoxArray():void
    {
        for(let value of this._data.loadIconArray())
        {
            this._iconList.push(
                {
                    caption: value.iconVariable,
                    value:   value.iconVariable
                });
        }
    }

    scrollToId(iconId):void
    {
        let iconContainer = window.document.getElementById(iconId);
        iconContainer.scrollIntoView();

        let documentWidth = window.document.body.offsetWidth;
        let scrollValue = 50;

        if(!isNullOrUndefined(documentWidth) && !isNaN(documentWidth))
        {
            if(documentWidth < 1200 && documentWidth > 768)
            {
                scrollValue = 86;
            }
        }

        window.scrollBy(0, -scrollValue);
    }

}
