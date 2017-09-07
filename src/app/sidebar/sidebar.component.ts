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
        {id: 1, name:'terra-button'},
        {id: 2, name:'Terra-Navigator'},
        {id: 3, name:'Terra-Input'},
        {id: 4, name:'Terra-Infobox'},
        {id: 5, name:'Terra-Overlay'},
        {id: 6, name:'Terra-Toolbar'}

    ];

}

