import {Injectable} from '@angular/core';

import {MainviewComponent} from "./mainview/mainview.component";
import {OverviewComponent} from "./templates/overview/overview.template";
import {ExampleComponent} from "./templates/example/example.template";
import {ApiComponent} from "./templates/api/api.template";
import {Router} from "@angular/router";

@Injectable()
export class RoutingService {

    constructor(private router:Router) { }

    createRoutes(compArray:Array<any>):void
    {
        let routeArray = [];

        for(let data of compArray) {
           let test =  {
                path:data.name,
                component: MainviewComponent,
                children:
                [
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    { path:'overview',component:OverviewComponent },
                    { path:'example',component:ExampleComponent },
                    { path:'api',component:ApiComponent }
                ]
            };
            routeArray.push(test);
        }

        this.router.resetConfig(routeArray);
    }

}
