import { Component } from '@angular/core';
import { iconService } from '../service/icon.service';
import { ScrollToViewHelper } from '../../../helper/scrollToView.helper';
import { IconInterface } from '../icon-item-component/icon-interface';

@Component(
    {
        selector: 'icon-sidebar',
        template: require('./icon-sidebar.component.html'),
        styles:   [require('./icon-sidebar.component.scss')]
    })
export class IconSidebarComponent
{
    public iconArray:Array<IconInterface> = [];
    constructor(private _data:iconService,
                public scrollToViewHelper:ScrollToViewHelper)
    {
        this.iconArray = _data.loadIconArray();
    }

}
