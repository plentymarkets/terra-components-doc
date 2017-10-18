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
        return this.http.get('node_modules/@plentymarkets/terra-components/component-documentation' +
                             '/build/statham.json')
                   .map((res:any) => res.json())
                   .toPromise();
    }
}
