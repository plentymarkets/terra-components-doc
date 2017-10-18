import { Component } from '@angular/core';
import { RouteResolver } from '../../core/resolve/route.resolver';

@Component(
    {
        selector: 'sidebar',
        template: require('./sidebar.component.html'),
        styles:   [require('./sidebar.component.scss')]
    })
export class SidebarComponent
{
    constructor(private _routeResolver:RouteResolver)
    {
    }
}
