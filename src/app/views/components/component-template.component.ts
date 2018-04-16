import {
    Component,
    HostListener
} from '@angular/core';
import { ComponentsConfig } from './config/components.config';

@Component(
    {
        selector: 'component-template',
        template: require('./component-template.component.html'),
        styles:   [require('./component-template.component.scss')]
    })
export class ComponentTemplateComponent
{
    public changeCol:boolean;
    constructor(private _componentsConfig:ComponentsConfig)
    {
    }

    @HostListener('window:resize', ['$event'])
    onResize()
    {
        let screenWidth = window.innerWidth;
        this.changeCol = (screenWidth <= 1300);
    }
}
