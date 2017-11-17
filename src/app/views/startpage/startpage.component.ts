import {
    Component
} from '@angular/core';

@Component(
    {
        selector: 'startpage',
        template: require('./startpage.component.html'),
        styles:   [require('./startpage.component.scss')]
    })
export class StartpageComponent
{

    constructor()
    {
    }

}
