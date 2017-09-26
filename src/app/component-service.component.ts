import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { ComponentInterface } from './componentInterface.component';

@Injectable()
export class ComponentService
{
    public data:any;

    constructor(private http:Http)
    {
        this.getCompArray().then((res:any) => this.data = res);
    }

    public getCompArray():Promise<ComponentInterface[]>
    {
        return this.http.get('./assets/docu/data.json')
                   .map((res:any) => res.json())
                   .toPromise();
    }
}
