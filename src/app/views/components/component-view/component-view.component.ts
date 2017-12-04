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
import { TerraAlertComponent } from '@plentymarkets/terra-components';
import { ComponentsConfig } from '../config/components.config';

@Component({
    selector:  'component-view',
    template:  require('./component-view.component.html'),
    styleUrls: ['./component-view.component.scss']
})
export class ComponentViewComponent implements AfterViewInit, OnDestroy, OnInit
{
    @ViewChild('viewChildTarget', {read: ViewContainerRef}) viewChildTarget;

    private _moduleWithProviders:ModuleWithProviders;
    private _componentRef:ComponentRef<any>;

    private _highlightedHtmlCode:string;
    private _highlightedCssCode:string;
    private _highlightedTsCode:string;
    private _apiCode:string;

    private _htmlPath:string;
    private _cssPath:string;
    private _tsPath:string;
    private _apiPath:string;
    private _componentName:string;
    private _overviewMarkDownPath:string;

    private _checkExample:boolean;

    private _tsCopyCode:any;
    private _cssCopyCode:any;
    private _htmlCopyCode:any;

    private _alert:TerraAlertComponent = TerraAlertComponent.getInstance();

    constructor(private _jitCompiler:JitCompiler,
                private _activatedRoute:ActivatedRoute,
                private _componentsConfig:ComponentsConfig,
                public http:Http)
    {
        this._htmlPath = '';
        this._cssPath = '';
        this._tsPath = '';
        this._apiCode = '';
        this._highlightedHtmlCode = '';
        this._highlightedCssCode = '';
        this._highlightedTsCode = '';
        this._checkExample = false;
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

        this.http.get(this._htmlPath).subscribe((res:any) =>
        {
            this._htmlCopyCode = res.text();
            this._highlightedHtmlCode = this._getHighlightedText(this._htmlCopyCode, 'xml');
            this._checkExample = !!(this._htmlCopyCode);
        });
        this.http.get(this._htmlPath).subscribe((res:any) =>
        {
            this._cssCopyCode = res.text();
            this._highlightedCssCode = this._getHighlightedText(this._cssCopyCode, 'css');
            this._checkExample = !!(this._cssCopyCode);
        });
        this.http.get(this._htmlPath).subscribe((res:any) =>
        {
            this._tsCopyCode = res.text();
            this._highlightedTsCode = this._getHighlightedText(this._tsCopyCode, 'typescript');
            this._checkExample = !!(this._tsCopyCode);
        });

    }

    ngAfterViewInit()
    {
        this._componentsConfig.isAnyComponentOpen = true;
        switch(this._activatedRoute.component['name'])
        {
            case 'ComponentViewComponent':
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

    private _getHighlightedText(text:string, textType:string):string
    {
        let rawText = this._htmlStringEscape(text);
        let highlightedText = `<pre><code class="${textType} highlight">${rawText}</code></pre>`;
        return highlightedText;
    }

    private _htmlStringEscape(s:string):string
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
