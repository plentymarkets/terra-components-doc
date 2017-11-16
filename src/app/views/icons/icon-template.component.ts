import {
    Component
} from '@angular/core';

@Component(
    {
        selector: 'icon-template',
        template: require('./icon-template.component.html'),
        styles:   [require('./icon-template.component.scss')]
    })
export class IconTemplateComponent
{

    constructor()
    {
    }

}