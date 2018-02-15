import {
    Component,
} from '@angular/core';
import { iconService } from '../service/icon.service';
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
    private displayIconTutorial()
    {
        let iconTutorial = document.getElementById('icon-tutorial');
        if(iconTutorial.style.display === "block")
        {
            iconTutorial.style.display = "none";
        }
        else iconTutorial.style.display = "block";

    }

}
