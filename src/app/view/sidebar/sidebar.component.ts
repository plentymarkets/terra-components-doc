import {
    Component,
    OnInit
} from '@angular/core';
import { RouteResolver } from '../../core/resolve/route.resolver';

@Component(
    {
        selector: 'sidebar',
        template: require('./sidebar.component.html'),
        styles:   [require('./sidebar.component.scss')]
    })
export class SidebarComponent implements OnInit
{
    private _showListValue: boolean;
    constructor(private _routeResolver:RouteResolver)
    {

    }
    ngOnInit()
    {
        this._showListValue = true;
    }
    showList()
    {
        if(this._showListValue)
        {
            this._showListValue = false;
        }
        else this._showListValue = true;
    }

}
