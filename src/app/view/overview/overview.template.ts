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
    selector:  'overview-component',
    template:  require('./overview.template.html'),
    styleUrls: ['./overview.template.scss']
})
export class OverviewComponent implements AfterViewInit, OnDestroy, OnInit
{
    @ViewChild('viewChildTarget', {read: ViewContainerRef}) viewChildTarget;

    private _moduleWithProviders:ModuleWithProviders;
    private _componentRef:ComponentRef<any>;
    private _overviewMarkDownPath:string;

    constructor(private _jitCompiler:JitCompiler,
                private _activatedRoute:ActivatedRoute,
                public translation:TranslationService,
                public http:Http,
                private activatedRoute:ActivatedRoute)
    {
    }

    ngOnInit()
    {

        this._overviewMarkDownPath = this.activatedRoute.routeConfig.data.OverviewMdPath;
    }

    ngAfterViewInit()
    {
        switch(this._activatedRoute.component['name'])
        {
            case 'OverviewComponent':
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
            this._moduleWithProviders = resolveData.overviewModule as ModuleWithProviders;
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

}