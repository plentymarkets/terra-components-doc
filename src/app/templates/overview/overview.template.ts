import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from "@angular/http";

@Component({
    selector:    'overview-template',
    templateUrl: './overview.template.html',
    styleUrls:   ['./overview.template.scss']
})
export class OverviewComponent
{
    public componentName:string;

    private _html:string;

    constructor(public activatedRoute:ActivatedRoute,
                public http:Http)
    {
        this.componentName = activatedRoute.routeConfig.data.componentName;

        http.get('assets/docu/build/' + this.componentName + '.html').map((response:any) =>
        {
            return response;
        }).subscribe((res:any) =>
        {
            this._html = res.text();
        });
    }
}
