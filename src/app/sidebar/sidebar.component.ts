import {
    Component,
    OnInit
} from '@angular/core';

import { ComponentInterface } from '../componentInterface.component';
import { ComponentService } from '../component-service.component';

@Component(
    {
        selector: 'sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss'],
        providers: [ComponentService]
    })
export class SidebarComponent implements OnInit {



    constructor(private componentService: ComponentService) { }

    compArray = [
        {id: 1, name:'Terra-Button'},
        {id: 2, name:'Terra-Navigator'},
        {id: 3, name:'Terra-Input'},
        {id: 4, name:'Terra-Infobox'},
        {id: 5, name:'Terra-Overlay'}
        ];

    getCompArray(): void {
        this.componentService
            .getCompArray()
            .then(compArray => this.compArray = compArray);
    }

    ngOnInit(): void {
        this.getCompArray();
    }


}

