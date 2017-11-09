import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { stathamInterface } from './data/statham.interface';

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

    public get dataJson():Array<stathamInterface>
    {
        return this._dataJson;
    }

    public set dataJson(value:Array<stathamInterface>)
    {
        this._dataJson = value;
    }

    private _noExampleHtml:string;

    private _dataJson:Array<stathamInterface>;

    constructor(public http:Http)
    {
    }

    load():Promise<any>
    {
        return new Promise((resolve) =>
        {
            let url:string = 'assets/component-documentation/build/statham.json';

            if(process.env.ENV !== 'production')
            {
                url = 'node_modules/@plentymarkets/terra-components/component-documentation/build/statham.json';
            }

            this.http.get(url).subscribe((resJson:any) =>
            {
                this.dataJson = resJson.json();

                resolve(this.dataJson);
            });
        });
    }
}
