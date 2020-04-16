import { Observable } from 'rxjs';
import {
    Component,
    OnInit
} from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
    selector:    'tcd-icon-tutorial',
    templateUrl: './icon-tutorial.component.html',
    styleUrls:   [
        './icon-tutorial.component.scss',
        './icon-tutorial.component.glob.scss'
    ]
})
export class IconTutorialComponent implements OnInit
{

    public buttonExample$:Observable<string>;
    public listExample$:Observable<string>;
    private readonly buttonExamplePath:string = 'assets/iconExample/iconButtonCodeExample.html';
    private readonly listExamplePath:string = 'assets/iconExample/iconListCodeExample.html';


    constructor(private http:HttpClient)
    {
        if(environment.production)
        {
            this.buttonExamplePath = 'src/app/assets/iconExample/iconButtonCodeExample.html';
            this.listExamplePath = 'src/app/assets/iconExample/iconListCodeExample.html';
        }
    }

    public ngOnInit():void
    {
        this.buttonExample$ = this.http.get(this.buttonExamplePath, {responseType: 'text'});
        this.listExample$ = this.http.get(this.listExamplePath, {responseType: 'text'});
    }
}
