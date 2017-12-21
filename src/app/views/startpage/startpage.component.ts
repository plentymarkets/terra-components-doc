import {
    Component,
    OnInit
} from '@angular/core';
import { RouteResolver } from '../../resolve/route.resolver';

@Component(
    {
        selector: 'startpage',
        template: require('./startpage.component.html'),
        styles:   [require('./startpage.component.scss')]
    })
export class StartpageComponent implements OnInit
{
    private _changelogData: object;

    constructor(private _routeResolver:RouteResolver)
    {
    }

    ngOnInit()
    {
        this._changelogData = this._routeResolver.dataChangelog;

        console.log();
    }

}
