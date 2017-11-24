import {
    AfterViewInit,
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';

@Component({
    selector:    'iconview',
    templateUrl: './icon-view.component.html',
    styles:      [require('./icon-view.component.scss'),
                  require('./icon-view.component.glob.scss').toString()
    ]
})
export class IconviewComponent implements OnInit, AfterViewInit
{

    private _newIconArray:any;

    constructor(private _data:iconService)
    {
    }

    ngOnInit()
    {
        this._newIconArray = this._data.loadIconArray();
    }

    ngAfterViewInit()
    {
        this.addColor();
    }

    addColor():void
    {
        for(let entry of this._newIconArray)
        {
            if(entry.color)
            {
                let element:any = document.getElementById(entry.iconVariable + '_color');
                element.classList.add(entry.color);
                console.log(entry.color);
            }
        }
    }

}
