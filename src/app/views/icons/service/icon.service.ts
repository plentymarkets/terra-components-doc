import { Injectable } from '@angular/core';
import { IconInterface } from '../icon-item-component/icon-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class IconService
{
    constructor(private http:HttpClient)
    {
    }

    public loadIconArray():Observable<Array<IconInterface>>
    {
        return this.http.get('assets/iconDescription.json').pipe(map((icons:Array<IconInterface>) =>
        {
            return icons.map((icon:IconInterface) =>
            {
                return {
                    variableName: icon.name,
                    name:         icon.name.replace('icon-', '').replace(/_/g, ' '),
                    description:  icon.description
                };
            });
        }));
    }
}
