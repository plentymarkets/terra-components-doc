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
    private _changelogData:object;
    public npmImagePath:string;
    public gitImagePath:string;

    constructor(private _routeResolver:RouteResolver)
    {
    }

    ngOnInit()
    {
        this._changelogData = this._routeResolver.dataChangelog;
        this.npmImagePath = 'assets/images/npm/npm-logo-simplifed-with-white-space.png';
        this.gitImagePath = 'assets/images/github/GitHub-Mark.png';
        if(process.env.ENV !== 'production')
        {
            this.npmImagePath = '/src/app/assets/images/npm/npm-logo-simplifed-with-white-space.png';
            this.gitImagePath = '/src/app/assets/images/github/GitHub-Mark.png';
        }
    }

}
