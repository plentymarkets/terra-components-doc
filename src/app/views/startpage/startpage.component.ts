import {
    Component,
    OnInit
} from '@angular/core';
import { RouteResolver } from '../../resolve/route.resolver';
import { environment } from '../../../environments/environment';

@Component({
    selector:    'startpage',
    templateUrl: './startpage.component.html',
    styleUrls:   ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit
{
    private _changelogData:object;
    public npmImagePath:string;
    public gitImagePath:string;
    public projectPath:string;

    constructor(private _routeResolver:RouteResolver)
    {
    }

    ngOnInit()
    {
        this._changelogData = this._routeResolver.dataChangelog;
        this.npmImagePath = 'assets/images/Npm-logo.svg';
        this.gitImagePath = 'assets/images/GitHub-logo.svg';
        this.projectPath = 'assets/images/';
        if(environment.production)
        {
            this.npmImagePath = '/src/app/assets/images/Npm-logo.svg';
            this.gitImagePath = '/src/app/assets/images/GitHub-logo.svg';
            this.projectPath = '/src/app/assets/images/';
        }
    }

}
