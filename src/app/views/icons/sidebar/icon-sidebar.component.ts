import {
    Component
} from '@angular/core';
import { iconService } from '../service/icon.service';

@Component(
    {
        selector: 'icon-sidebar',
        template: require('./icon-sidebar.component.html'),
        styles:   [require('./icon-sidebar.component.scss')]
    })
export class IconSidebarComponent
{

    constructor(private _iconService:iconService)
    {
    }

}
