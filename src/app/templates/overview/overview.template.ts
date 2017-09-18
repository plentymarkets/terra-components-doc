import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:    'overview-template',
    templateUrl: './overview.template.html',
    styleUrls:   ['./overview.template.scss']
})
export class OverviewComponent
{
    public componentName:any;

    constructor(public activatedRoute:ActivatedRoute,)
    {
        this.componentName = activatedRoute.routeConfig.data.componentName;
    }
}
