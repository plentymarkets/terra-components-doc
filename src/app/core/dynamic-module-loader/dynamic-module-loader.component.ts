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
import { TranslationService } from 'angular-l10n';
import { Http } from '@angular/http';

@Component({
               selector:  'dynamic-module-loader',
               template:  require('./dynamic-module-loader.component.html'),
               styleUrls: ['./dynamic-module-loader.component.scss']
           })
export class DynamicPluginLoaderComponent implements AfterViewInit, OnDestroy, OnInit
{
    @ViewChild('viewChildTarget', {read: ViewContainerRef}) viewChildTarget;

    private _moduleWithProviders:ModuleWithProviders;
    private _componentRef:ComponentRef<any>;

    private _htmlCode:string;
    private _cssCode:string;
    private _typescriptCode:string;

    private _temp:string;
    private _isActive:boolean;
    private _isActiveButton:boolean;

    private _htlmPath:string;
    private _cssPath:string;
    private _typescripPath:string;
    private _componentName:string;
    private _menuButtonTitle:string;

    constructor(private _jitCompiler:JitCompiler,
                private _activatedRoute:ActivatedRoute,
                public translation:TranslationService,
                public http:Http)
    {
        this._temp = '';
        this._htlmPath = '';
        this._cssPath = '';
        this._typescripPath = ''
        this._isActive = false;
        this._isActiveButton = false;
        this._menuButtonTitle = 'show code';

    }

    ngOnInit()
    {
        this._htlmPath = this._activatedRoute.routeConfig.data.htmlPath;
        this._cssPath = this._activatedRoute.routeConfig.data.cssPath;
        this._typescripPath = this._activatedRoute.routeConfig.data.tsPath;
        this._componentName = this._activatedRoute.routeConfig.data.componentName;

        this.http.get(this._htlmPath).subscribe((res:any) => {
                this._htmlCode = res.text();
        });
        this.http.get(this._cssPath).subscribe((res:any) => {

                this._cssCode = res.text();
        });
        this.http.get(this._typescripPath).subscribe((res:any) => {

                this._typescriptCode = res.text();
        });

        if(this._htmlCode== null)
        {
            this._htmlCode = 'no html example found';
        }
        if(this._cssCode== null)
        {
            this._cssCode = 'no css example found';
        }
        if(this._typescriptCode== null)
        {
            this._typescriptCode = 'no typescript example found';
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

    private loadComponentData(data:Data):void
    {
        data.subscribe((resolveData) => {
            this._moduleWithProviders = resolveData.module as ModuleWithProviders;
            this.updateComponent();
        });
    }

    public updateComponent():void
    {
        this._jitCompiler.compileModuleAndAllComponentsAsync(this._moduleWithProviders.ngModule)
            .then((moduleWithFactories:ModuleWithComponentFactories<any>) => {
                moduleWithFactories.componentFactories.forEach((factory) => {
                    if(factory.componentType.name === 'CustomDynamicComponent')
                    {
                        this._componentRef = this.viewChildTarget.createComponent(factory);
                    }
                });
            });
    }

    public showCodeMenu():void
    {
        if(this._isActive === true)
        {
            this._isActive = false;
            this._menuButtonTitle = 'show code';
        }
        else
        {
            this._isActive = true;
            this._menuButtonTitle = 'hide code';
            this._temp = this._htmlCode;
        }

    }

    public showCode(codeType:string):void
    {
        switch(codeType)
        {
            case 'Html':
                this._temp = this._htmlCode;
                break;
            case 'Css':
                this._temp = this._cssCode;
                break;
            case 'Typescript':
                this._temp = this._typescriptCode;
                break;
            default:
                break;
        }

    }

}
