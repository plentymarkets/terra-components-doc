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
import { HighlightTextHelper } from '../../../helper/highlightText.helper';

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
    private _apiCode:any;

    private _htmlToCopy:string;
    private _cssToCopy:string;
    private _tsToCopy:string;

    private _htmlPath:string;
    private _cssPath:string;
    private _tsPath:string;
    private _apiPath:string;
    private _overviewMarkDownPath:string;
    private _componentName:string;

    private _alert:TerraAlertComponent = TerraAlertComponent.getInstance();

    constructor(private _jitCompiler:JitCompiler,
                private _activatedRoute:ActivatedRoute,
                private _componentsConfig:ComponentsConfig,
                private _highlightTextHelper:HighlightTextHelper,
                public http:Http)
    {
        this._htmlPath = '';
        this._cssPath = '';
        this._tsPath = '';
        this._highlightedHtmlCode = '';
        this._highlightedCssCode = '';
        this._highlightedTsCode = '';
        this._htmlToCopy = '';
        this._cssToCopy = '';
        this._tsToCopy = '';
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
        this.http.get(this._htmlPath).subscribe((res:any) =>
        {
            this._htmlToCopy = res.text();
            this._highlightedHtmlCode = this._highlightTextHelper.highlightText(this._htmlToCopy, 'xml');
        });
        this.http.get(this._cssPath).subscribe((res:any) =>
        {
            this._cssToCopy = res.text();
            this._highlightedCssCode = this._highlightTextHelper.highlightText(this._cssToCopy, 'css');
        });
        this.http.get(this._tsPath).subscribe((res:any) =>
        {
            this._tsToCopy = res.text();
            this._highlightedTsCode = this._highlightTextHelper.highlightText(this._tsToCopy, 'typescript');
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
