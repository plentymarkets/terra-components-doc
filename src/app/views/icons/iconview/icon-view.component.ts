import {
    Component,
    OnInit
} from '@angular/core';
import { iconService } from '../service/icon.service';


@Component({
    selector:    'iconview',
    templateUrl: './icon-view.component.html',
    styleUrls:   ['./icon-view.component.scss']
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