import {
    Component,
    OnInit
} from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';

@Component({
    selector:    'iconview',
    templateUrl: './iconview.component.html',
    styleUrls:   ['./iconview.component.scss']
})
export class IconviewComponent implements OnInit
{

    private _iconArray:any;
    private _newIconArray = [];
    private _iconVariableArray:any = [];
    private _pathCounter:number;

    private _html:string;

    constructor(public http:Http)
    {
        this._html = '';
        this._pathCounter = 0;
    }

    ngOnInit()
    {
        this.getIconArray().subscribe(
            (data:any) =>
            {
                this._iconArray = data;
                this.createNewIconArray();
            }
        );

    }

    public getIconArray():Observable<any>
    {
        return this.http.get('./node_modules/@plentymarkets/terra-components/JSON/variables.json')
                   .map((res:any) => res.json());
    }

    public createNewIconArray():any
    {
        for(let data in this._iconArray)
        {
            if(data.includes('icon-') && !data.includes('-icon'))
            {
                this._iconVariableArray.push(data);
            }
        }

        for(let itr = 0; itr < this._iconVariableArray.length; itr++)
        {

            let iconVariableName:string;
            let lenghtOfIconName:number = this._iconVariableArray[itr].length;
            let objData:any;

            if(this._iconVariableArray[itr].substring(lenghtOfIconName - 5) == 'path1')
            {
                this._pathCounter = 1;

                iconVariableName = this._iconVariableArray[itr].substring(0, lenghtOfIconName - 6);
                objData = {
                    icon: iconVariableName,
                    path: []
                };
                for(; this._iconVariableArray[itr].includes(iconVariableName); itr++)
                {
                    objData.path.push("path" + this._pathCounter);
                    this._pathCounter++;
                }
                itr--;
            }
            else
            {
                iconVariableName = this._iconVariableArray[itr];
                objData = {
                    icon: iconVariableName,
                    path: []
                };
            }
            this._newIconArray.push(objData);
        }
    }
}
