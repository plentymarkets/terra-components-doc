import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RouteResolver
{
    public get data():any
    {
        return this._data;
    }

    public set data(value:any)
    {
        this._data = value;
    }

    private _html:string;
    private _noExampleHtml:string;

    private _data:any;

    constructor(public http:Http)
    {
        console.log("RouteResolver:constructor");
    }

    load():Promise<any>
    {
        return new Promise((resolve) =>
        {
            this.http.get('./assets/docu/data.json').subscribe((res:any) =>
                {
                    console.log("RouteResolver:load");
                    this.data = res.json();
                    resolve(res.json());
                }
            );
        });
    }


}