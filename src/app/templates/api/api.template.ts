import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// @Component({
//     selector: 'api-template',
//     template: require('/workspace/terra-components-doc/src/app/assets/docu/build/terra-alert.html')
// })

export class ApiComponent
{
    public componentName:string;

    constructor( public activatedRoute:ActivatedRoute )
    {
        this.componentName = activatedRoute.routeConfig.data.componentName;
    }

}

const dynamicComponent = Component({
    selector: 'api-template',
    template: require('/workspace/terra-components-doc/src/app/assets/docu/build/terra-alert.html')
})(ApiComponent);