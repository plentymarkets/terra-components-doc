import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { MainviewComponent } from "./mainview/mainview.component";
import { OverviewComponent } from "./templates/overview/overview.template";
import { ExampleComponent } from "./templates/example/example.template";
import { ApiComponent } from "./templates/api/api.template";

@Injectable()
export class RoutingService {

    constructor( private router:Router ) { }

    createRoutes( compArray:Array<any> ) :void
    {
        let routeArray = [];

        for( let data of compArray ) {
           let objData =  {
                path:data.name,
                component: MainviewComponent,

                data:{
                   componentName: data.name
               },
                children:
                [
                    {
                        path: '',
                        redirectTo: 'overview',
                        pathMatch: 'full'
                    },
                    {
                        path:'overview',
                        component: OverviewComponent
                    },
                    {
                        path:'example',
                        component: ExampleComponent
                    },
                    {
                        path:'api',
                        component: ApiComponent
                    }
                ]
            };
            routeArray.push(objData);
        }
        this.router.resetConfig(routeArray);
    }

}
