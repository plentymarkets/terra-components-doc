import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { stathamInterface } from './data/statham.interface';
import {
    combineLatest,
    Observable
} from 'rxjs';
import { environment } from '../../environments/environment';

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
        let url:string = 'assets/component-documentation/build/statham.json';
        let iconJsonUrl:string = 'assets/component-documentation/build/iconDescription.json';
        let changelogJsonUrl:string = 'assets/component-documentation/build/documentation-changelog.json';

        if(environment.production)
        {
            url = 'node_modules/@plentymarkets/terra-components/component-documentation/build/statham.json';
            iconJsonUrl = 'node_modules/@plentymarkets/terra-components/component-documentation/build/iconDescription.json';
            changelogJsonUrl = 'node_modules/@plentymarkets/terra-components/component-documentation/build/documentation-changelog.json';
        }

        let observer:Observable<any> = combineLatest(this.http.get(url), this.http.get(iconJsonUrl), this.http.get(changelogJsonUrl),
            (dataJson:any, iconJson:any, dataChangelog:any) =>
            {
                return {
                    dataJson: dataJson,
                    iconJson: iconJson,
                    dataChangelog: dataChangelog
                }
            });

        observer.subscribe((res: { dataJson:any, iconJson:any, dataChangelog:any}) =>
        {
            this.dataJson = res.dataJson.json();
            this.iconJson = res.iconJson.json();
            this.dataChangelog = res.dataChangelog.json();
        });

        return observer.toPromise();
    }
}
