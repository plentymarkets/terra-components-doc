import {
    Component,
    OnInit
} from '@angular/core';

@Component(
    {
        selector: 'sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
export class SidebarComponent implements OnInit {
    ngOnInit() {

    }

    compArray = [
        {
            buttons: [
                {
                    id: 0,
                    name: 'Terra-Button'
                },
                {
                    id: 1,
                    name: 'Terra-Button'
                },
            ]
        },
        {
            navigation: [
                {
                    id: 2,
                    name: 'Terra-Navigator'
                },
            ]
        }
    ];

}