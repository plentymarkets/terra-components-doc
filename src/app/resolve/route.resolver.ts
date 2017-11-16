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

    public get iconVariables():Object
    {
        return this._dataVariables;
    }

    public set iconVariables(value:Object)
    {
        this._dataVariables = value;
    }

    public get iconDescription():Object
    {
        return this._dataDescription;
    }

    public set iconDescription(value:Object)
    {
        this._dataDescription = value;
    }

    private _noExampleHtml:string;
    private _dataJson:Array<stathamInterface>;
    private _dataDescription:Object;
    private _dataVariables:Object;

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
            this.http.get('./node_modules/@plentymarkets/terra-components/component-documentation/build/variables.json')
                .subscribe((resJson:any) =>
                {
                    this.iconVariables = resJson.json();
                    resolve(this.iconVariables);
                });
            this.http.get('./node_modules/@plentymarkets/terra-components/component-documentation/build/iconDescription.json')
                .subscribe((resJson:any) =>
                {
                    this.iconDescription = resJson.json();
                    resolve(this.iconDescription);
                });
        });
    }
}
