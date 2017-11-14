import {
    Component,
    OnInit
} from '@angular/core';
import { Http } from '@angular/http'
import { RouteResolver } from '../components/resolve/route.resolver';

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
    private _iconDescriptionArray:any = [];

    private _html:string;

    constructor(public http:Http,
                public data:RouteResolver)
    {
        this._html = '';
    }

    ngOnInit()
    {
        this._iconArray = this.data.iconVariables;
        this._iconDescriptionArray = this.data.iconDescription;
        this.createNewIconArray();
    }

    public createNewIconArray():void
    {
        let newIconArray = [];

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
            let path:any = [];

            if(this._iconVariableArray[itr].substring(lenghtOfIconName - 5) == 'path1')
            {
                iconVariableName = this._iconVariableArray[itr].substring(0, lenghtOfIconName - 6);

                for(let pathCounter = 1; this._iconVariableArray[itr].includes(iconVariableName); itr++, pathCounter++)
                {
                    path.push("path" + pathCounter);
                }
                itr--;
            }
            else
            {
                iconVariableName = this._iconVariableArray[itr];
            }

            objData = {
                icon:        iconVariableName,
                path:        path,
                description: this.addIconDescriptionToIconArray(iconVariableName)
            };

            newIconArray.push(objData);
        }

        this._newIconArray = newIconArray;
        console.log(this._newIconArray);

    }

    public addIconDescriptionToIconArray(iconName:string):string
    {
        return this._iconDescriptionArray[iconName];
    }

}
