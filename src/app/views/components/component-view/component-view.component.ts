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

    private _htmlCode:string;
    private _cssCode:string;
    private _typescriptCode:string;

    private _temp:string;
    private _isActive:boolean;
    private _isActiveButton:boolean;
    private _hideExample:boolean;

    private _htlmPath:string;
    private _cssPath:string;
    private _apiPath:string;
    private _typescripPath:string;
    private _componentName:string;
    private _apiHtml:any;
    private _overviewMarkDownPath:string;
    private _isMarkDownPath:boolean;

    private _tsHighlight:string;
    private _htmlHighlight:string;
    private _cssHighlight:string;

    private _alert:TerraAlertComponent = TerraAlertComponent.getInstance();

    constructor(private _jitCompiler:JitCompiler,
                private _activatedRoute:ActivatedRoute,
                public http:Http)
    {
        this._alert.closeAlertByIdentifier('info');
        this._temp = '';
        this._htlmPath = '';
        this._cssPath = '';
        this._htmlCode = '';
        this._cssCode = '';
        this._typescriptCode = '';
        this._typescripPath = '';
        this._isActive = false;
        this._isActiveButton = false;
        this._hideExample = false;
        this._tsHighlight = '';
        this._htmlHighlight = '';
        this._cssHighlight = '';

        this._componentName = _activatedRoute.routeConfig.data.componentName;
        this._apiPath = _activatedRoute.routeConfig.data.apiPath;

        http.get(this._apiPath).subscribe((res:any) =>
        {
            this._apiHtml = res.text();
        });

    }

    ngOnInit()
    {
        this._htlmPath = this._activatedRoute.routeConfig.data.htmlPath;
        this._cssPath = this._activatedRoute.routeConfig.data.cssPath;
        this._typescripPath = this._activatedRoute.routeConfig.data.tsPath;
        this._componentName = this._activatedRoute.routeConfig.data.componentName;
        this._alert.closeAlertByIdentifier('info');

        this.http.get(this._htlmPath).finally(() =>
        {
            this.checkTemplate(this._htmlCode);
        }).subscribe((res:any) =>
        {
            this._htmlCode = res.text();
            this._htmlHighlight = this.htmlStringEscape(this._htmlCode);
            this._htmlHighlight = `<pre><code class="xml highlight">${this._htmlHighlight}</code></pre>`;
            this.checkTemplate(this._htmlCode);
        });

        this.http.get(this._cssPath).finally(() =>
        {
        }).subscribe((res:any) =>
        {
            this._cssCode = res.text();
            this._cssHighlight = `<pre><code class="css highlight">${this._cssCode}</code></pre>`;
        });

        this.http.get(this._typescripPath).finally(() =>
        {
        }).subscribe((res:any) =>
        {
            this._typescriptCode = res.text();
            this._tsHighlight = `<pre><code class="typescript highlight">${this._typescriptCode}</code></pre>`;
        });

        this._overviewMarkDownPath = this._activatedRoute.routeConfig.data.OverviewMdPath;
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
        if(str.length === 0)
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

    public showCodeMenu():void
    {
        if(this._hideExample === false)
        {
            if(this._isActive === true)
            {
                this._isActive = false;
            }
            else
            {
                this._isActive = true;
                this._temp = this._htmlHighlight;
            }
        }
    }

    public showCode(codeType:string):void
    {
        switch(codeType)
        {
            case 'Html':
                this._temp = this._htmlHighlight;
                break;
            case 'Css':
                this._temp = this._cssHighlight;
                break;
            case 'Typescript':
                this._temp = this._tsHighlight;
                break;
            default:
                break;
        }
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
