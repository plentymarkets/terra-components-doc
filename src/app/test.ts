import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TestService
{

    constructor(private http:Http)
    {
    }

    load():Promise<any>
    {
        //let promise:Promise<any> = new Promise((resolve:any) =>
        //{
        //
        //});

        return this.http.get('./assets/docu/data.json')
                   .map((res:any) => res.json())
                   .toPromise();

        //return promise;
    }

}
