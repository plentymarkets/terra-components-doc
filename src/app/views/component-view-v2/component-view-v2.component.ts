import {
    Component,
    OnInit,
    Type
} from '@angular/core';
import {
    ActivatedRoute,
    Params
} from '@angular/router';
import {
    map,
    switchMap
} from 'rxjs/operators';
import {
    combineLatest,
    Observable,
    of
} from 'rxjs';
import { TerraButtonInterface } from '@plentymarkets/terra-components';
import { examples } from '@plentymarkets/terra-components/components/example-collection';
import { HttpClient } from '@angular/common/http';
import { componentMap } from '../../component-data.map';

@Component({
    selector:    'tcd-component-view-v2',
    templateUrl: './component-view-v2.component.html',
    styleUrls:   ['./component-view-v2.component.scss']
})
export class ComponentViewV2Component implements OnInit
{
    protected component$:Observable<{ class:Type<any>, metadata:Component, files?:{ts:string, html:string, scss:string} }>;
    protected readonly sourceToggle:Array<TerraButtonInterface> = [{
        icon:          'icon-placeholder_show_list',
        clickFunction: ():void => this.toggleSources()
    }];

    private source:boolean = false;
    private readonly annotations:string = '__annotations__';
    private readonly githubSourcePath:string = 'https://raw.githubusercontent.com/plentymarkets/terra-components/v4.0.0-beta.7/src/lib/components/';

    constructor(private route:ActivatedRoute, private httpClient:HttpClient)
    {
    }

    public ngOnInit():void
    {
        this.component$ = this.route.params.pipe(
            switchMap((params:Params) =>
            {
                const componentName:string = params['componentName'];
                const compData:any = componentMap[componentName];
                this.source = false;
                const example:Type<any> = examples.find((e:Type<any>) =>
                {
                    return e.name.toLowerCase().startsWith(componentName.toLowerCase());
                });

                if(example)
                {
                    const decorator:Component = example[this.annotations][0];
                    if(compData)
                    {
                        return this.getExampleFiles(compData.path).pipe(map((files:{ts:string, html:string, scss:string}) =>
                        {
                            return {
                                class: example,
                                metadata: decorator,
                                files: files,
                                path: compData.path
                            };
                        }));
                    }
                }
                return of(undefined);
            }),
        );
    }

    private toggleSources():void
    {
        this.source = !this.source;
    }

    private getExampleFiles(exampleFilePath:string):Observable<{ ts:string, html:string, scss:string }>
    {
        return combineLatest(
            this.httpClient.get(`${this.githubSourcePath}/${exampleFilePath}.ts`, {responseType: 'text'}),
            this.httpClient.get(`${this.githubSourcePath}/${exampleFilePath}.html`, {responseType: 'text'}),
            this.httpClient.get(`${this.githubSourcePath}/${exampleFilePath}.scss`, {responseType: 'text'})
        ).pipe(
            map((res:Array<string>) =>
            {
                return {
                    ts:   res[0],
                    html: res[1],
                    scss: res[2]
                };
            })
        );
    }

}
