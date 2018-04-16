import {
    Injectable
} from '@angular/core';
import { Http } from '@angular/http';
import { RouteResolver } from '../../../resolve/route.resolver';
import { IconInterface } from '../icon-item-component/icon-interface';

@Injectable()
export class iconService
{
    private _iconArray:Array<IconInterface> = [];

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
                variableName: entry.name,
                name:         iconName,
                description:  entry.description
            };
            newIconArray.push(objData);
        }
        return newIconArray;
    }

}
