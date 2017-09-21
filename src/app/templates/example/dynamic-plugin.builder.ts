import {
    Component,
    Injectable,
    ModuleWithProviders,
    NgModule
} from '@angular/core';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';
import { CommonModule } from '@angular/common';

@Injectable()
export class DynamicPluginBuilder
{
    constructor()
    {
    }

    public createPluginModule(template:string, selector:string):ModuleWithProviders
    {
        let type = this.createNewComponent(template, selector);
        let module = this.createComponentModule(type);

        return module.forRoot();
    }

    public createNewComponent(template?:string, selector?:string):any
    {
        // let templateSrc = template + '?access_token=' + localStorage.getItem('accessToken');

        @Component({
            selector: 'terra-dynamic-component',
            template: '<div>fisch</div> <terra-button></terra-button>',
        })
        class CustomDynamicComponent
        {
        }

        return CustomDynamicComponent;
    }

    protected createComponentModule(componentType:any):any
    {
        @NgModule({
            imports:      [
                CommonModule,
                TerraComponentsModule.forRoot()
            ],
            declarations: [
                componentType
            ]
        })
        class RuntimeComponentModule
        {
            static forRoot()
            {
                return {
                    ngModule:  RuntimeComponentModule,
                    providers: [],
                };
            }

        }

        return RuntimeComponentModule;
    }
}
