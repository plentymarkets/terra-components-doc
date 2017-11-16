import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RouteResolver } from '../../../resolve/route.resolver';

@Injectable()
export class iconService
{
    private _iconArray:any = [];

    constructor(public http:Http,
                public data:RouteResolver)
    {
    }

    public loadIconArray():any
    {
        if (this._iconArray.length <= 0)
        {
            this._iconArray = this.buildNewIconArray();
        }

        return this._iconArray;
    }

    private buildNewIconArray():any
    {
        let iconVariableArray:any = [];
        let newIconArray = [];

        for(let data in this.data.iconVariables)
        {
            if(data.includes('icon-') && !data.includes('-icon'))
            {
                iconVariableArray.push(data);
            }
        }

        for(let itr = 0; itr < iconVariableArray.length; itr++)
        {
            let iconVariableName:string;
            let lenghtOfIconName:number = iconVariableArray[itr].length;
            let objData:any;
            let path:any = [];

            if(iconVariableArray[itr].substring(lenghtOfIconName - 5) == 'path1')
            {
                iconVariableName = iconVariableArray[itr].substring(0, lenghtOfIconName - 6);

                for(let pathCounter = 1; iconVariableArray[itr].includes(iconVariableName); itr++, pathCounter++)
                {
                    path.push("path" + pathCounter);
                }
                itr--;
            }
            else
            {
                iconVariableName = iconVariableArray[itr];
            }

            objData = {
                icon:        iconVariableName,
                path:        path,
                description: this.data.iconDescription[iconVariableName]
            };

            newIconArray.push(objData);
        }

        return newIconArray;
    }
}
