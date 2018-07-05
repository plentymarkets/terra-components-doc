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
        return this._iconArray = this.buildNewIconArray();
    }

    private buildNewIconArray():any
    {
        let newIconArray:Array<IconInterface> = [];
        let objData:any;
        let iconArray:Array<IconInterface> = this.data.iconJson;
        for(let entry of iconArray)
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
