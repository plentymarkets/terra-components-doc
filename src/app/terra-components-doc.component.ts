import {
    Component,
    ModuleWithProviders,
    OnInit
} from '@angular/core';
import { DynamicPluginLoaderComponent } from './views/components/dynamic-plugin-loader/dynamic-plugin-loader.component';
import { RouteResolver } from './resolve/route.resolver';
import {
    Router,
    Routes
} from '@angular/router';
import { DynamicModuleBuilderService } from './views/components/dynamic-module-builder/dynamic-module-builder.service';
import { IconviewComponent } from './views/icons/iconview/iconview.component';
import { stathamInterface } from './resolve/data/statham.interface';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'terra-components-doc',
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
        this._mainViews = [
            {
                path:      'iconview',
                component: IconviewComponent
            }
            //{
            //    path: 'landing-page',
            //    component: LandingPageComponent
            //}
        ];
    }

    ngOnInit():void
    {
        let routeArray:Routes = [{
            //path:      '',
            //component: LandingPageComponent
        }];

        let apiUrl:string = 'assets/';
        let exampleUrl:string = 'assets/component-documentation';

        if(process.env.ENV !== 'production')
        {
            apiUrl = 'node_modules/@plentymarkets/terra-components/';
            exampleUrl = 'node_modules/@plentymarkets/terra-components';
        }

        this._routeResolver.dataJson.forEach((data:stathamInterface) =>
        {
            let module:ModuleWithProviders =
                this._dynamicModuleBuilderService.createPluginModule(data.ExampleSelector, data.name);

            let objData = {
                path:      data.name,
                component: DynamicPluginLoaderComponent,
                data:      {
                    apiPath:        apiUrl + data.path,
                    componentName:  data.name,
                    module:         module,
                    htmlPath:       exampleUrl + data.pathExampleHtml,
                    cssPath:        exampleUrl + data.pathExampleCss,
                    tsPath:         exampleUrl + data.pathExampleTs,
                    OverviewMdPath: !isNullOrUndefined(data.pathOverview) ? exampleUrl + data.pathOverview : void 0
                }
            };

            routeArray.push(objData);
        });


        for(let views of this._mainViews)
        {
            routeArray.push(views);
        }

        this.router.resetConfig(routeArray);
    }
}
