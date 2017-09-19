import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector: 'api-template',
    template: require('./api.template.html'),
})
export class ApiComponent
{
    public componentName:string;

    private _html:string;

    constructor(public activatedRoute:ActivatedRoute,
                public http:Http)
    {
        this.componentName = activatedRoute.routeConfig.data.componentName;

        http.get('assets/docu/build/' + this.componentName + '.html').subscribe((res:any) =>
        {
            this._html = res.text();
        });
    }
}