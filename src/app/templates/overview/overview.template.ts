import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';




@Component({
               selector: 'overview-template',
               template: require('./overview.template.html'),
               styles:   [require('./overview.template.scss')]
           })

export class OverviewComponent implements OnInit
{



    private _overviewMarkDownPath: string;


    constructor(private activatedRoute:ActivatedRoute)
    {

    }
    ngOnInit()
    {
        this._overviewMarkDownPath =this.activatedRoute.routeConfig.data.OverviewMdPath;
    }
}

