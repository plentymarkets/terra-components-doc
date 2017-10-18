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
        console.log("RouteResolver:constructor");
    }

    load():Promise<any>
    {
        return new Promise((resolve) =>
        {
            this.http.get('node_modules/@plentymarkets/terra-components/component-documentation' +
                          '/build/statham.json').subscribe((res:any) =>
            {
                this.dataJson = res.json();

                console.log(this.dataJson);

                //this.noExampleHtml = res.noExampleHtml.text();


                this.http.get(this.dataJson[0].pathExampleHtml).subscribe((res:any) =>
                {
                    console.log(res);

                    resolve(res.dataJson.json());
                });
            });


            //this.http.get('./assets/docu/dataJson.json').subscribe((res:any) =>
            //    {
            //        console.log("RouteResolver:load");
            //        this.dataJson = res.json();
            //        resolve(res.json());
            //    }
            //);
        });
    }


}