import {
    Component,
    ModuleWithProviders,
    OnInit
} from '@angular/core';
import { ComponentViewComponent } from './views/components/component-view/component-view.component';
import { RouteResolver } from './resolve/route.resolver';
import {
    Router,
    Routes
} from '@angular/router';
import { DynamicModuleBuilderService } from './views/components/dynamic-module-builder/dynamic-module-builder.service';
import { stathamInterface } from './resolve/data/statham.interface';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'terra-components-doc',
    template: require('./terra-components-doc.component.html'),
    styles:   [require('./terra-components-doc.component.scss')],
})
export class AppComponent implements OnInit
{
    private _viewMode:string = '';

    public constructor(private _routeResolver:RouteResolver,
                       private _dynamicModuleBuilderService:DynamicModuleBuilderService,
                       private router:Router)
    {
    }

    private getUrlVars()
    {
        let vars = {};

        window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(substring:string, ...args:any[]):string
        {
            vars[args[0]] = args[1];
            return;
        });

        return vars;
    }

    ngOnInit():void
    {
        let routeArray:Routes = [];

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
                component: ComponentViewComponent,
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

        this.router.resetConfig(routeArray);

        this._viewMode = this.getUrlVars()['view'];
    }
}
