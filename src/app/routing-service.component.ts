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
    private _html:string;
    private _noExampleHtml:string;

    constructor(private router:Router,
                private _dynamicModuleBuilderService:DynamicModuleBuilderService,
                public http:Http)
    {
    }

    createRoutes(compArray:Array<any>):void
    {
        this.http.get('assets/docu/examples/noExampleTemplate.html').subscribe
        (
            (res:any) =>
            {
                this._noExampleHtml = res.text();
                this.getData(compArray);
            }
        )
    }

    private getData(compArray:Array<any>):void
    {

        let routeArray = [];
        for(let data of compArray)
        {
            let module:ModuleWithProviders;

            this.http.get(data.pathExampleHtml)
                .finally(
                    () => {
                        let objData = {
                            path:      data.name,
                            component: MainviewComponent,
                            data:      {
                                apiPath:       data.path,
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
                                    data:      {
                                        module: module,
                                        htmlPath: data.pathExampleHtml,
                                        cssPath: data.pathExampleCss,
                                        tsPath: data.pathExampleTs
                                    }
                                },
                                {
                                    path:      'api',
                                    component: ApiComponent,
                                    data:      {
                                        apiPath:       data.path,
                                        componentName: data.name
                                    }
                                }
                            ]
                        };

                        routeArray.push(objData);
                    })
                .subscribe(
                    (res:any) => {
                        this._html = res.text();
                        module = this._dynamicModuleBuilderService.createPluginModule(this._html, data.name);

                    },
                    err => {
                        module = this._dynamicModuleBuilderService.createPluginModule(this._noExampleHtml, data.name);
                    }
                );


        }

        setTimeout(() => {
            this.router.resetConfig(routeArray);

        });

    }
}
