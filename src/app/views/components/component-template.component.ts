import { Component } from '@angular/core';
import { ComponentsConfig } from './config/components.config';

@Component(
    {
        selector: 'component-template',
        template: require('./component-template.component.html'),
        styles:   [require('./component-template.component.scss')]
    })
export class ComponentTemplateComponent
{
    constructor(private _componentsConfig:ComponentsConfig)
    {
    }
}
