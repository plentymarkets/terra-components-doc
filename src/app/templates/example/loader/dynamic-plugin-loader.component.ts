import {
    AfterViewInit,
    Component,
    ComponentRef,
    ModuleWithComponentFactories,
    ModuleWithProviders,
    OnChanges,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {
    ActivatedRoute,
    Data
} from '@angular/router';
import { JitCompiler } from '@angular/compiler';
import { TranslationService } from 'angular-l10n';

@Component({
    selector: 'terra-dynamic-plugin-loader',
    template: require('./dynamic-plugin-loader.component.html'),
    styles:   [require('./dynamic-plugin-loader.component.scss')]
})
export class DynamicPluginLoaderComponent implements AfterViewInit, OnChanges
{
    @ViewChild('viewChildTarget', {read: ViewContainerRef}) viewChildTarget;

    private _moduleWithProviders:ModuleWithProviders;
    private _componentRef:ComponentRef<any>;

    //private _alert:TerraAlertComponent = TerraAlertComponent.getInstance();

    constructor(private _jitCompiler:JitCompiler,
                private _activatedRoute:ActivatedRoute,
                public translation:TranslationService)
    {
    }

    ngOnChanges()
    {
        this.updateComponent();
    }

    ngAfterViewInit()
    {
        switch(this._activatedRoute.component['name'])
        {
            case 'DynamicPluginLoaderComponent':
                this.loadComponentData(this._activatedRoute.data);
                break;
            default:
                // this._alert.addAlert({
                //                         closable:         true,
                //                         dismissOnTimeout: 0,
                //                         identifier:       'dynamicPluginLoader',
                //                         type:             'danger',
                //                         msg:              this.translation.translate('dynamicPluginLoader.failedOnLoadPlugin')
                //                     });
                break;
        }


    }

    private destroyComponent():void
    {
        if(this._componentRef)
        {
            this._componentRef.destroy();
        }
    }

    private loadComponentData(data:Data):void
    {
        data.subscribe(
            (resolveData) =>
            {
                if(resolveData !== {})
                {
                    this._moduleWithProviders = resolveData as ModuleWithProviders;
                    this.updateComponent();
                }
            });
    }

    public updateComponent():void
    {
        this._jitCompiler
            .compileModuleAndAllComponentsAsync(this._moduleWithProviders.ngModule)
            .then((moduleWithFactories:ModuleWithComponentFactories<any>) =>
            {
                this.destroyComponent();
                this._componentRef = this.viewChildTarget.createComponent(moduleWithFactories.componentFactories[0]);
            });
    }
}
