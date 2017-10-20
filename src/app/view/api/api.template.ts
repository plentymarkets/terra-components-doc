import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector: 'api-template',
    template: require('./api.template.html'),
    // scss file for this component is the 'index.glob.scss'
})
export class ApiComponent
{
    public componentName:string;
    public apiPath:string;

    private _html:string;

    constructor(public activatedRoute:ActivatedRoute,
                public http:Http)
    {
        this.componentName = activatedRoute.routeConfig.data.componentName;
        this.apiPath = activatedRoute.routeConfig.data.apiPath;

        http.get(this.apiPath).subscribe((res:any) =>
        {
            this._html = res.text();
        });
    }
}
