import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector:    'guide',
    templateUrl: './guide.component.html',
    styleUrls:   ['./guide.component.scss']
})
export class GuideComponent implements OnInit
{
    private _overviewMarkDownPath:string;

    ngOnInit()
    {

        this._overviewMarkDownPath = './src/app/guide/readme-de.md';
    }
}
