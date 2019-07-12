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
    catchError,
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
import {
    HttpClient,
    HttpErrorResponse
} from '@angular/common/http';
import {
    ComponentDataInterface,
    componentMap
} from '../../component-data.map';

@Component({
    selector:    'tcd-component-view-v2',
    templateUrl: './component-view-v2.component.html',
    styleUrls:   ['./component-view-v2.component.scss']
})
export class ComponentViewV2Component implements OnInit
{
    protected example$:Observable<Type<any>>;
    protected files$:Observable<{ts:string, html:string, scss:string}>;
    protected readonly sourceToggle:Array<TerraButtonInterface> = [{
        icon:          'icon-placeholder_show_list',
        clickFunction: ():void => this.toggleSources()
    }];

    private source:boolean = false;
    private readonly annotations:string = '__annotations__';
    private readonly currentSrcPath:string = 'https://raw.githubusercontent.com/plentymarkets/terra-components/4.X.X/src/lib/components';
    private readonly versionedSrcPath:string = 'https://raw.githubusercontent.com/plentymarkets/terra-components/v4.0.0-beta.7/src/lib/components';

    constructor(private route:ActivatedRoute, private httpClient:HttpClient)
    {
    }

    public ngOnInit():void
    {
        const componentName$:Observable<string> = this.route.params.pipe(map((params:Params) => params['componentName']));
        this.example$ = componentName$.pipe(map((componentName:string) =>
        {
            this.source = false;
            return examples.find((e:Type<any>) =>
            {
                return e.name.toLowerCase().startsWith(componentName.toLowerCase());
            });
        }));
        this.files$ = componentName$.pipe(
            switchMap((componentName:string) =>
            {
                const compData:ComponentDataInterface = componentMap[componentName];
                if(compData)
                {
                    return this.getExampleFiles(compData.path);
                }
                return of(undefined);
            })
        );
    }

    private toggleSources():void
    {
        this.source = !this.source;
    }

    private getExampleFiles(exampleFilePath:string):Observable<{ ts:string, html:string, scss:string }>
    {
        return combineLatest(
            this.getSingleFile(`${this.currentSrcPath}/${exampleFilePath}.ts`),
            this.getSingleFile(`${this.currentSrcPath}/${exampleFilePath}.html`),
            this.getSingleFile(`${this.currentSrcPath}/${exampleFilePath}.scss`)
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

    private getSingleFile(path:string):Observable<string>
    {
        return this.httpClient.get(path, {responseType: 'text'}).pipe(
            catchError((error:HttpErrorResponse) =>
            {
                if(error.status === 404)
                {
                    return of(undefined);
                }
            })
        );
    }

}
