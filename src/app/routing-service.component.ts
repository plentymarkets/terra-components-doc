import {
    Injectable,
    ModuleWithProviders
} from '@angular/core';
import { Router } from "@angular/router";
import { MainviewComponent } from "./mainview/mainview.component";
import { OverviewComponent } from "./templates/overview/overview.template";
import { ApiComponent } from "./templates/api/api.template";
import { DynamicModuleBuilderService } from './core/dynamic-module-builder/dynamic-module-builder.service';
import { DynamicPluginLoaderComponent } from './core/dynamic-module-loader/dynamic-module-loader.component';
import { Http } from '@angular/http';

@Injectable()
export class RoutingService
{
    constructor(private router:Router,
                private _dynamicModuleBuilderService:DynamicModuleBuilderService,
                public http:Http)
    {
    }

    createRoutes(compArray:Array<any>):void
    {
        let routeArray = [];

        for(let data of compArray)
        {
            let module:ModuleWithProviders = this._dynamicModuleBuilderService.createPluginModule(data.example, data.name);

            this.http.get('assets/docu/build/' + this.componentName + '.html').subscribe((res:any) =>
            {
                this._html = res.text();
            });

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
