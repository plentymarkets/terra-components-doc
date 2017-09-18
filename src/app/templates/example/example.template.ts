import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'example-template',
    templateUrl: './example.template.html'
})
export class ExampleComponent
{
    public componentName:any;

    constructor(public activatedRoute:ActivatedRoute,)
    {
        this.componentName = activatedRoute.routeConfig.data.componentName;
    }
}