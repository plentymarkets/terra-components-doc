import { Component } from '@angular/core';
import { IconService } from '../service/icon.service';
import { ScrollToViewHelper } from '../../../helper/scrollToView.helper';
import { IconInterface } from '../icon-item-component/icon-interface';

@Component({
    selector:    'icon-sidebar',
    templateUrl: './icon-sidebar.component.html',
    styleUrls:   ['./icon-sidebar.component.scss']
})
export class IconSidebarComponent
{
    public iconArray:Array<IconInterface> = [];

    constructor(private srv:IconService,
                public scrollToViewHelper:ScrollToViewHelper)
    {
        this.srv.loadIconArray().subscribe((icons:Array<IconInterface>) => this.iconArray = icons);
    }

}
