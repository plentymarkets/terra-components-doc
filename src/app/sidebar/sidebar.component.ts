import {
    Component,
    OnInit
} from '@angular/core';
import { RouteResolver } from '../core/resolve/route.resolver';

@Component(
    {
        selector:    'sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls:   ['./sidebar.component.scss'],
    })
export class SidebarComponent implements OnInit
{
    constructor(private _routeResolver:RouteResolver)
    {
    }

    ngOnInit():void
    {
    }
}
