///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {
    Component,
    OnInit
} from '@angular/core';

import { RoutingService } from './routing-service.component';
import { ComponentService } from './component-service.component';

@Component({
    selector: 'app-component',
    template: require('./terra-components-doc.component.html'),
    styles:   [require('./terra-components-doc.component.scss')],
})
export class AppComponent implements OnInit
{
    public constructor(private routingService:RoutingService,
                       private componentService:ComponentService)
    {
    }

    ngOnInit():void
    {
        this.componentService.getCompArray().then((res:any) => this.routingService.createRoutes(res));
    }
}
