import {
    Component,
    ModuleWithProviders,
    OnInit
} from '@angular/core';
import { ApiComponent } from './templates/api/api.template';
import { DynamicPluginLoaderComponent } from './core/dynamic-module-loader/dynamic-module-loader.component';
import { OverviewComponent } from './templates/overview/overview.template';
import { MainviewComponent } from './mainview/mainview.component';
import { RouteResolver } from './core/resolve/route.resolver';
import { Router } from '@angular/router';
import { DynamicModuleBuilderService } from './core/dynamic-module-builder/dynamic-module-builder.service';
import { IconviewComponent } from './icons/iconview.component';
import { GuideComponent } from './guide/guide.component';

@Component({
    selector: 'app-component',
    template: require('./terra-components-doc.component.html'),
    styles:   [require('./terra-components-doc.component.scss')],
})
export class AppComponent implements OnInit
{
    private _mainViews:any;

    public constructor(private _routeResolver:RouteResolver,
                       private _dynamicModuleBuilderService:DynamicModuleBuilderService,
                       private router:Router)
    {
        console.log("AppComponent:constructor");

        this._mainViews = [
            {
                path:      'iconview',
                component: IconviewComponent,
            },
            {
                path:      'guideview',
                component: GuideComponent,
            }
        ];
    }

    ngOnInit():void
    {
        console.log("AppComponent:ngOnInit");

        let routeArray = [];

        this._routeResolver.dataJson.forEach((data) =>
        {
            //let module:ModuleWithProviders = this._dynamicModuleBuilderService.createPluginModule(this._routeResolver.noExampleHtml,
            //    data.name);

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
                            overviewModule: module,
                            htmlPath:       data.pathExampleHtml,
                            cssPath:        data.pathExampleCss,
                            tsPath:         data.pathExampleTs,
                            componentName:  data.name,
                            OverviewMdPath: data.pathOverview
                        }
                    },
                    {
                        path:      'example',
                        component: DynamicPluginLoaderComponent,
                        data:      {
                            module:        module,
                            htmlPath:      data.pathExampleHtml,
                            cssPath:       data.pathExampleCss,
                            tsPath:        data.pathExampleTs,
                            componentName: data.name
                        }
                    },
                    {
                        path:      'api',
                        component: ApiComponent,
                        data:      {
                            apiPath:       data.path,
                            componentName: data.name
                        }
                    },
                ],
            };

            routeArray.push(objData);

            //}).subscribe((res:any) =>
            //    {
            //        this._html = res.text();
            //        module = this._dynamicModuleBuilderService.createPluginModule(
            //            '<terra-button-example></terra-button-example>', data.name
            //        );
            //
            //    },
            //    err =>
            //    {
            //        module = this._dynamicModuleBuilderService.createPluginModule(this._noExampleHtml, data.name);
            //    }
            //);

        });


        for(let views of this._mainViews)
        {
            routeArray.push(views);
        }

        //this.router.config.push(objData);
        this.router.resetConfig(routeArray);

    }
}
