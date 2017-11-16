import {
    Component
} from '@angular/core';
import { RouteResolver } from '../../../resolve/route.resolver';

@Component(
    {
        selector: 'component-sidebar',
        template: require('./component-sidebar.component.html'),
        styles:   [require('./component-sidebar.component.scss')]
    })
export class ComponentSidebarComponent
{

    constructor(private _routeResolver:RouteResolver)
    {
    }

}
