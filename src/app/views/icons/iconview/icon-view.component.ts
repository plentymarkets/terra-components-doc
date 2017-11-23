import {
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';


@Component({
    selector:    'iconview',
    templateUrl: './icon-view.component.html',
    styles:   [require('./icon-view.component.scss'),
                  require('./icon-view.component.glob.scss').toString()
    ]
})
export class IconviewComponent implements OnInit
{
    private _newIconArray:any;

    constructor(private _iconService:iconService)
    {
    }

    ngOnInit()
    {
        this._newIconArray = this._iconService.loadIconArray();

    }

}
