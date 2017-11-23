import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RouteResolver } from '../../../resolve/route.resolver';
import { isNullOrUndefined } from 'util';

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
        if(this._iconArray.length <= 0)
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
            let objData:any;
            let iconName:string;

            if(!iconVariableArray[itr].includes('path'))
            {
                iconVariableName = iconVariableArray[itr];
                iconName = iconVariableName.replace('icon-','');
                while(iconName.includes('_'))
                {
                    iconName = iconName.replace('_',' ');
                }
                objData = {
                    name:        iconName,
                    icon:        iconVariableName,
                    description: this.data.iconDescription[iconVariableName]
                };

                newIconArray.push(objData);
            }
        }
        return newIconArray;
    }
}
