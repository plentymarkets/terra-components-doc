import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
    selector:    'tcd-startpage',
    templateUrl: './startpage.component.html',
    styleUrls:   ['./startpage.component.scss']
})
export class StartpageComponent
{
    public npmImagePath:string;
    public gitImagePath:string;
    public projectPath:string;

    constructor()
    {
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
