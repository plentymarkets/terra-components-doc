import {
    Component,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
    selector: 'example-template',
    template: require('./example.template.html')
})
export class ExampleComponent implements OnInit
{
    public componentName:string;

    private _html:string;

    constructor(public activatedRoute:ActivatedRoute,
                public http:Http)
    {
        this.componentName = activatedRoute.routeConfig.data.componentName;
    }

    ngOnInit():void
    {
        this.http.get('assets/docu/examples/' + this.componentName + '/example.html')
            .subscribe((res:any) =>
            {
                this._html = res.text();
            });
    }
}
