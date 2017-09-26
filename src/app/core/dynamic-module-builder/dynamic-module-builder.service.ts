import {
    Component,
    Injectable,
    ModuleWithProviders,
    NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerraComponentsModule } from '@plentymarkets/terra-components/app';

@Injectable()
export class DynamicModuleBuilderService
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
        @Component({
            selector: 'terra-dynamic-component',
            template: template
        })
        class CustomDynamicComponent
        {
        }

        return CustomDynamicComponent;
    }

    protected createComponentModule(componentType:any):any
    {
        @NgModule({
            imports:         [
                CommonModule,
                TerraComponentsModule.forRoot()
            ],
            declarations:    [componentType],
            entryComponents: [componentType],
            exports:         [componentType],
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
