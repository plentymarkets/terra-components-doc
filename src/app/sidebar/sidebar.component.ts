import {
    Component,
    OnInit
} from '@angular/core';

import { ComponentInterface } from '../componentInterface.component';
import { ComponentService } from '../component-service.component';

@Component(
    {
        selector:    'sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls:   ['./sidebar.component.scss'],
        providers:   [ComponentService]
    })
export class SidebarComponent implements OnInit
{
    compArray:ComponentInterface[];

    constructor(private componentService:ComponentService)
    {
    }

    getCompArray():void
    {
        this.componentService
            .getCompArray()
            .then(compArray => this.compArray = compArray);
    }

    ngOnInit():void
    {
        this.getCompArray();
    }
}
