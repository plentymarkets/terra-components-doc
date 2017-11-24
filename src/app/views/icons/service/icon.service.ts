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
        if(this._iconArray.length <= 0)
        {
            this._iconArray = this.buildNewIconArray();
        }

        return this._iconArray;
    }

    private buildNewIconArray():any
    {
        let newIconArray:any = [];
        let objData:any;

        for(let entry of this.data.iconJson)
        {
            let iconName = entry.name.replace('icon-', '');
            while(iconName.includes('_'))
            {
                iconName = iconName.replace('_', ' ');
            }
            objData = {
                iconVariable: entry.name,
                name:         iconName,
                color:        entry.color,
                description:  entry.description
            };
            newIconArray.push(objData);
        }
        return newIconArray;
    }
}
