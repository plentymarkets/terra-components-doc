import {
    Component,
} from '@angular/core';
import { iconService } from '../service/icon.service';
import { isNullOrUndefined } from 'util';

@Component(
    {
        selector: 'icon-sidebar',
        template: require('./icon-sidebar.component.html'),
        styles:   [require('./icon-sidebar.component.scss')]
    })
export class IconSidebarComponent
{
    constructor(private _data:iconService)
    {
    }

    scrollToId(iconId):void
    {
        let iconContainer = window.document.getElementById(iconId);
        iconContainer.scrollIntoView();

        let documentWidth = window.document.body.offsetWidth;
        let scrollValue = 50;

        if(!isNullOrUndefined(documentWidth) && !isNaN(documentWidth))
        {
            if(documentWidth < 1200 && documentWidth > 768)
            {
                scrollValue = 86;
            }
        }

        window.scrollBy(0, -scrollValue);
    }

}
