import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RouteResolver
{
    public get noExampleHtml():string
    {
        return this._noExampleHtml;
    }

    public set noExampleHtml(value:string)
    {
        this._noExampleHtml = value;
    }

    public get dataJson():any
    {
        return this._dataJson;
    }

    public set dataJson(value:any)
    {
        this._dataJson = value;
    }

    private _noExampleHtml:string;

    private _dataJson:any;

    constructor(public http:Http)
    {
    }

    load():Promise<any>
    {
        return new Promise((resolve) =>
        {
            this.http.get('node_modules/@plentymarkets/terra-components/component-documentation' +
                          '/build/statham.json').subscribe((resJson:any) =>
            {
                this.dataJson = resJson.json();

                resolve(this.dataJson);
            });
        });
    }
}
