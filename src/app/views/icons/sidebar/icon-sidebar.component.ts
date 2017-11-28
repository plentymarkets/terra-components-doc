import { Component } from '@angular/core';
import { iconService } from '../service/icon.service';

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
        let navBar = window.parent.window.document.getElementById('navbar');
        iconContainer.scrollIntoView();
        window.scrollBy(0,- navBar.offsetHeight);
    }
}
