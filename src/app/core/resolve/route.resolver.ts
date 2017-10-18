import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
            Observable.combineLatest(this.http.get('./assets/docu/data.json'),
                this.http.get('./assets/docu/examples/noExampleTemplate.html'),
                (dataJson:any, noExampleHtml:any) =>
                {
                    return {
                        dataJson:      dataJson,
                        noExampleHtml: noExampleHtml
                    }
                }).subscribe((res:any) =>
            {
                console.log(res);
                this.dataJson = res.dataJson.json();
                this.noExampleHtml = res.noExampleHtml.text();


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