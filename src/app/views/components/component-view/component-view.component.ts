import {
    AfterViewInit,
    Component,
    ComponentRef,
    ModuleWithComponentFactories,
    ModuleWithProviders,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {
    ActivatedRoute,
    Data
} from '@angular/router';
import { JitCompiler } from '@angular/compiler';
import { Http } from '@angular/http';
import { Clipboard } from 'ts-clipboard';
import { isNullOrUndefined } from 'util';
import { TerraAlertComponent } from '@plentymarkets/terra-components';

@Component({
    selector:  'dynamic-module-loader',
    template:  require('./component-view.component.html'),
    styleUrls: ['./component-view.component.scss']
})
export class ComponentViewComponent implements AfterViewInit, OnDestroy, OnInit
{
    @ViewChild('viewChildTarget', {read: ViewContainerRef}) viewChildTarget;

    private _moduleWithProviders:ModuleWithProviders;
    private _componentRef:ComponentRef<any>;

    private _highlitedHtmlCode:string;
    private _highlitedCssCode:string;
    private _highlitedTsCode:string;
    private _apiCode:any;

    private _htmlPath:string;
    private _cssPath:string;
    private _tsPath:string;
    private _apiPath:string;
    private _componentName:string;
    private _overviewMarkDownPath:string;
    private _isMarkDownPath:boolean;

    private _rawHtmlCode:string;
    private _rawCssCode:string;
    private _rawTsCode:string;

    private _hideExample:boolean;

    private _alert:TerraAlertComponent = TerraAlertComponent.getInstance();

    constructor(private _jitCompiler:JitCompiler,
                private _activatedRoute:ActivatedRoute,
                public http:Http)
    {
        this._htmlPath = '';
        this._cssPath = '';
        this._tsPath = '';
        this._highlitedHtmlCode = '';
        this._highlitedCssCode = '';
        this._highlitedTsCode = '';
        this._hideExample = false;
        this._rawHtmlCode = '';
        this._rawCssCode = '';
        this._rawTsCode = '';
    }

    ngOnInit()
    {

        this._alert.closeAlertByIdentifier('info');
        this._htmlPath = this._activatedRoute.routeConfig.data.htmlPath;
        this._cssPath = this._activatedRoute.routeConfig.data.cssPath;
        this._tsPath = this._activatedRoute.routeConfig.data.tsPath;
        this._apiPath = this._activatedRoute.routeConfig.data.apiPath;
        this._componentName = this._activatedRoute.routeConfig.data.componentName;
        this._overviewMarkDownPath = this._activatedRoute.routeConfig.data.OverviewMdPath;

        this.http.get(this._apiPath).subscribe((res:any) =>
        {
            this._apiCode = res.text();
        });

        this.http.get(this._htmlPath).finally(() =>
        {
        }).subscribe((res:any) =>
        {
            this._rawHtmlCode = res.text();
            this._highlitedHtmlCode = this.htmlStringEscape(this._rawHtmlCode);
            this._highlitedHtmlCode = `<pre><code class="xml highlight">${this._highlitedHtmlCode}</code></pre>`;
            this.checkTemplate(this._highlitedHtmlCode);
        });

        this.http.get(this._cssPath).finally(() =>
        {
        }).subscribe((res:any) =>
        {
            this._rawCssCode = res.text();
            this._highlitedCssCode = `<pre><code class="css highlight">${this._rawCssCode}</code></pre>`;
        });

        this.http.get(this._tsPath).finally(() =>
        {
        }).subscribe((res:any) =>
        {
            this._rawTsCode = res.text();
            this._highlitedTsCode = `<pre><code class="typescript highlight">${this._rawTsCode}</code></pre>`;
        });

        if(!isNullOrUndefined(this._overviewMarkDownPath))
        {
            this._isMarkDownPath = true;
        }
    }

    ngAfterViewInit()
    {
        switch(this._activatedRoute.component['name'])
        {
            case 'DynamicPluginLoaderComponent':
                this.loadComponentData(this._activatedRoute.data);
                break;
            default:
                break;
        }
    }

    ngOnDestroy()
    {
        if(this._componentRef)
        {
            this._componentRef.destroy();
        }
    }

    private checkTemplate(str:string):void
    {
        if(str.length == 0)
        {
            this._hideExample = true;
        }
        else
        {
            this._hideExample = false;
        }
    }

    private htmlStringEscape(s:string):string
    {
        return s.replace(/[&"<>]/g, function(c)
        {
            return {
                '&': "&amp;",
                '"': "&quot;",
                '<': "&lt;",
                '>': "&gt;"
            }[c];
        });
    }

    private loadComponentData(data:Data):void
    {
        data.subscribe((resolveData) =>
        {
            this._moduleWithProviders = resolveData.module as ModuleWithProviders;
            this.updateComponent();
        });
    }

    public updateComponent():void
    {
        this._jitCompiler.compileModuleAndAllComponentsAsync(this._moduleWithProviders.ngModule)
            .then((moduleWithFactories:ModuleWithComponentFactories<any>) =>
            {
                moduleWithFactories.componentFactories.forEach((factory) =>
                {
                    if(factory.componentType.name === 'CustomDynamicComponent')
                    {
                        this._componentRef = this.viewChildTarget.createComponent(factory);
                    }
                });
            });
    }

    public copyText(text):void
    {

        Clipboard.copy(text);
        this._alert.addAlert({
            msg:              'Text successfully copied to Clipboard!',
            type:             'info',
            dismissOnTimeout: 3000,
            identifier:       'info'
        });

        setTimeout(() => this._alert.closeAlertByIdentifier('info'), 3000);
    }

}
