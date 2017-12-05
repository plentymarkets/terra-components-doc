import {
    Component,
} from '@angular/core';
import { iconService } from '../service/icon.service';
import { isNullOrUndefined } from 'util';
import { ScrollToViewHelper } from '../../../helper/scrollToView.helper';

@Component(
    {
        selector: 'icon-sidebar',
        template: require('./icon-sidebar.component.html'),
        styles:   [require('./icon-sidebar.component.scss')]
    })
export class IconSidebarComponent
{
    constructor(private _data:iconService,
                private _scrollToViewHelper:ScrollToViewHelper)
    {
    }

}
