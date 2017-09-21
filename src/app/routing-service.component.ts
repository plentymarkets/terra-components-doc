import {
    Injectable,
    ModuleWithProviders
} from '@angular/core';
import { Router } from "@angular/router";
import { MainviewComponent } from "./mainview/mainview.component";
import { OverviewComponent } from "./templates/overview/overview.template";
import { ApiComponent } from "./templates/api/api.template";
import { DynamicPluginBuilder } from './templates/example/dynamic-plugin.builder';
import { DynamicPluginLoaderComponent } from './templates/example/loader/dynamic-plugin-loader.component';

@Injectable()
export class RoutingService
{
    constructor(private router:Router,
                private _dynamicPluginBuilder:DynamicPluginBuilder)
    {
    }

    createRoutes(compArray:Array<any>):void
    {
        let routeArray = [];

        for(let data of compArray)
        {
            let module:ModuleWithProviders = this._dynamicPluginBuilder.createPluginModule(data.example, data.name);

            let objData = {
                path:      data.name,
                component: MainviewComponent,
                data:      {
                    componentName: data.name
                },
                children:  [
                    {
                        path:       '',
                        redirectTo: 'overview',
                        pathMatch:  'full'
                    },
                    {
                        path:      'overview',
                        component: OverviewComponent,
                        data:      {
                            componentName: data.name
                        }
                    },
                    {
                        path:      'example',
                        component: DynamicPluginLoaderComponent,
                        data:      module
                    },
                    {
                        path:      'api',
                        component: ApiComponent,
                        data:      {
                            componentName: data.name
                        }
                    }
                ]
            };

            routeArray.push(objData);
        }
        this.router.resetConfig(routeArray);
    }
}
