import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { stathamInterface } from './data/statham.interface';

@Injectable()
export class RouteResolver
{
    public set dataChangelog(value:any)
    {
        this._dataChangelog = value;
    }
    public get dataChangelog():any
    {
        return this._dataChangelog;
    }

    public get dataJson():Array<stathamInterface>
    {
        return this._dataJson;
    }

    public set dataJson(value:Array<stathamInterface>)
    {
        this._dataJson = value;
    }

    public get iconJson():any
    {
        return this._dataIcon;
    }

    public set iconJson(value:any)
    {
        this._dataIcon = value;
    }

    private _dataJson:Array<stathamInterface>;
    private _dataIcon:any;
    private _dataChangelog:any;

    constructor(public http:Http)
    {
    }

    load():Promise<any>
    {
        return new Promise((resolve) => {
            let url:string = 'assets/component-documentation/build/statham.json';
            let iconJsonUrl:string = 'assets/component-documentation/build/iconDescription.json';
            let changelogJsonUrl:string = 'assets/component-documentation/build/documentation-changelog.json';

            if(process.env.ENV !== 'production')
            {
                url = 'node_modules/@plentymarkets/terra-components/component-documentation/build/statham.json';
                iconJsonUrl = 'node_modules/@plentymarkets/terra-components/component-documentation/build/iconDescription.json';
                changelogJsonUrl = 'node_modules/@plentymarkets/terra-components/component-documentation/build/documentation-changelog.json';
            }

            this.http.get(url).subscribe((resJson:any) => {
                this.dataJson = resJson.json();

                resolve(this.dataJson);
            });
            this.http.get(iconJsonUrl)
                .subscribe((resJson:any) => {
                    this.iconJson = resJson.json();
                    resolve(this.iconJson);
                });
            this.http.get(changelogJsonUrl)
                .subscribe((resJson:any) => {
                    this.dataChangelog = resJson.json();
                    resolve(this.dataChangelog);
                });
        });
    }
}
