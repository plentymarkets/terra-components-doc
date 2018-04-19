import {
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';
import { Http } from '@angular/http';
import { ScrollToViewHelper } from '../../../helper/scrollToView.helper';
import { IconInterface } from '../icon-item-component/icon-interface';
import { isNullOrUndefined } from 'util';

@Component({
    selector:    'iconview',
    templateUrl: './icon-view.component.html',
    styles:      [require('./icon-view.component.scss'),
                  require('./icon-view.component.glob.scss').toString()
    ]
})
export class IconViewComponent
{
    public iconArray:Array<IconInterface> = [];
    public inputSearchValue:string;
    private MINLENGTH:number = 3;
    public enableSearch:boolean;

    constructor(private _data:iconService,
                public _scrollToViewHelper:ScrollToViewHelper,
                public http:Http)
    {
        this.inputSearchValue = '';
        this.enableSearch = false;
        this.iconArray = this._data.loadIconArray();
    }

    public searchArray(iconName:string, searchString:string):boolean
    {
        if(this.inputSearchValue.length == 0)return true;
        return iconName.includes(searchString);
    }

    public validateSearch():void
    {
        if(!isNullOrUndefined(this.inputSearchValue))
        {
            this.enableSearch = this.inputSearchValue.length > this.MINLENGTH;
        }
    }
}
