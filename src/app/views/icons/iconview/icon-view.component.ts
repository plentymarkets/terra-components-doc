import { Component } from '@angular/core';
import { IconApiService } from '../service/icon-api.service';
import { ScrollToViewHelper } from '../../../helper/scrollToView.helper';
import { IconInterface } from '../icon-item-component/icon-interface';
import { isNullOrUndefined } from 'util';

@Component({
    selector:    'iconview',
    templateUrl: './icon-view.component.html',
    styleUrls:   ['./icon-view.component.scss', './icon-view.component.glob.scss']
})
export class IconViewComponent
{
    public iconArray:Array<IconInterface> = [];
    public inputSearchValue:string;
    private MINLENGTH:number = 3;
    public enableSearch:boolean;

    constructor(private srv:IconApiService,
                public _scrollToViewHelper:ScrollToViewHelper)
    {
        this.inputSearchValue = '';
        this.enableSearch = false;
        this.srv.loadIconArray().subscribe((icons:Array<IconInterface>) => this.iconArray = icons);
    }

    public searchArray(iconName:string, searchString:string):boolean
    {
        if(this.inputSearchValue.length === 0)
        {
            return true;
        }
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
